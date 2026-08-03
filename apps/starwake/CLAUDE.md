# Starwake — frontend (web-sdk app)

Celestial 5x4 payline slot, forked from `apps/lines`. The MATH lives in the other
repo (`~/projects/math-sdk`, `games/starwake`) and is **converged, compliance-clean
and finished** — see its CLAUDE.md. This app only *presents* books the math already
produced. It cannot change an outcome, only fail to display one.

Studio: **Uptown Games**. Game: **Starwake**.

## The mechanic, in one paragraph

Star scatters (`S`) trigger free spins; the count picks a tier — 3/4/5/6 →
Corvus (4 cells) / Ursa (7) / Draco (11) / Ascendant (11, mystery-only, 2 pre-lit).
The tier's constellation is dealt as target cells on the board. When a **winning
payline crosses a target cell** it lights and becomes a **sticky wild** — so wins
create wilds which create more wins (the snowball). Light every cell and the
**beast wakes**: a 2x2 block wild that roams to a new position each spin with a
multiplier climbing one rung of a published ladder. Partial progress still pays —
the "wild carpet" is ~68% of Draco buys and is what keeps the mode compliant.

## Current state

WORKING: 5x4 board, real books in Storybook for all six modes, all 14 book events
handled, constellation overlay + star chart, beast persists and glides, sticky
wilds hold position. Console is clean.

NOT DONE: real art (everything is placeholder shapes), sound, six-mode buy menu,
info/rules screen, replay mode, popout/mobile, language files.

## Files that are OURS (everything else is stock `lines`)

| file | what it does |
|---|---|
| `src/components/Constellation.svelte` | board overlay: target cells, sticky wilds, beast block |
| `src/components/StarChart.svelte` | side panel: mini 5x4 map, connecting lines, progress |
| `src/game/typesBookEvent.ts` | the 6 Starwake event types (bottom of file) |
| `src/game/bookEventHandlerMap.ts` | handlers for those 6 (marked with a banner comment) |
| `src/game/stateGame.svelte.ts` | `stateGame.constellation` + `resetConstellation()` |
| `src/game/constants.ts` | `INITIAL_BOARD` — **this sets the 5x4 grid**, not config.numRows |
| `src/game/config.ts` | GENERATED — never hand-edit |
| `scripts/*` | config sync + book inspection tools |

Both `Constellation.svelte` and `StarChart.svelte` have a `TUNE ME` block of named
constants at the top. Change a number, save, Storybook hot-reloads.

## Where the data comes from

```
book (math sdk)  ->  xstate actor  ->  bookEventHandlerMap  ->  $state  ->  components  ->  PixiJS
                                              \-> eventEmitter (sounds, transitions) ---^
```

`stateGame.constellation` is a **pure projection of the book tape** — every handler
REPLACES state from its event rather than accumulating. Keep it that way: it is
what makes a replay starting mid-feature correct, and replay is an approval
requirement.

## ⚠ WHEN THE ART ARRIVES — what changes

### 1. Declare the assets — `src/game/assets.ts`

Three types: `sprite` (single image), `sprites` (spritesheet JSON), `spine`
(skeletal animation: `.atlas` + `.json` skeleton). `preload: true` loads it on the
loading screen. Drop files under `static/assets/{sprites,spines,audio}/`.

### 2. Map symbol art — `src/game/constants.ts` → `SYMBOL_INFO_MAP`

Each symbol maps its **states** to assets:

```ts
H1: { static, spin, land, win, postWinStatic }
```

`win` is normally a spine animation, the rest are usually the same static sprite.
Sizes are `sizeRatios` (fractions of a cell). **All 11 symbols currently point at
the mining-themed placeholder art copied from `apps/lines` and MUST be replaced —
sample assets are explicitly not approvable for publication.**

⚠ The map still contains an `H5` entry inherited from the sample. Starwake has no
H5; harmless but delete it when doing the art pass.

⚠ `L5` currently renders as a multiplier spine (`low_multiplier_static`) because in
the sample L5 *was* a multiplier symbol. In Starwake L5 is an ordinary card-rank
low. Replace it with a plain sprite.

### 3. Replace the placeholder shapes

Everything below is a coloured rectangle/circle standing in for art. The **logic is
correct and should not change** — only swap what gets drawn.

**`Constellation.svelte`**
- Unlit target cell → currently a small faint circle. Should become a dim star
  outline on the cell.
- Lit sticky wild → currently an **opaque gold tile with a "W"**. Should become the
  real wild/star art. See the sticky-wild note below before changing this.
- Beast → currently an opaque purple rounded rect with `TIER ×N` text. Should
  become a `SpineProvider` per tier: play `beast_wake` on `beastWake`, await its
  `complete`, then loop `beast_idle`; the glide already exists as a tween.
  The multiplier badge wants to be `BitmapText` (see the WIN artifact note).

**`StarChart.svelte`**
- Panel, grid, dots and connector lines are all `Graphics` primitives. The
  connecting lines are the signature idea (the constellation draws itself) — keep
  the behaviour, restyle the stroke.

**Four beast identities are needed**: Corvus (crow), Ursa (bear), Draco (dragon),
Ascendant (dragon variant — shares Draco's ladder and cells, should look like a
"charged" Draco). All are **2x2** today; the tier is carried by the constellation
and the ladder, not the footprint.

### 4. ⚠ THE TWO OPAQUE-COVER HACKS — revisit with art

The reel system in `utils-slots` has **no sticky/hold API**, and the math drops a
fresh `W` into a sticky cell every spin. So the symbol underneath genuinely
scrolls away with the reels. Both the beast block and the lit sticky wilds are
drawn **fully opaque** to hide that. It reads correctly but it is a workaround.

PROPER FIX (do it during the art pass, not before): teach the reel to hold specific
rows so those cells physically do not spin. That is surgery on `packages/utils-slots`
— a SHARED package used by every game on the SDK — so it must be done as an
additive opt-in, never a behaviour change. Until then, any art placed in those
cells must be opaque or the scrolling symbol shows through.

### 5. Tile assets for submission

- `Starwake-BG.png|jpg` — environmental background
- `Starwake-FG.png` — the beast, transparent
- `UptownGames-Logo.png` — legible at small size
- BG + FG **≤ 3 MB combined**
- ⚠ **MUST BE BRIGHT, NO DARK EDGES** despite the night-sky theme. This is a hard
  review criterion and the single easiest way to fail on presentation.

## Playtest harness

Storybook replays real books with no RGS. Books are GENERATED and gitignored:

```bash
# from ~/projects/math-sdk
./env/bin/python games/starwake/export_story_books.py            # all six modes
cd ~/projects/web-sdk/apps/starwake && pnpm storybook            # localhost:6006
```

Each mode has named scenario stories (wakes / top rung / roam floor / never
completes / max win) that play a SPECIFIC book — random books are useless for
playtesting since a base spin is dead 71% of the time.

Inspect what a story is doing (console prints the index):

```bash
node scripts/inspect-book.cjs buy_draco 57      # payouts, count-up sequence
node scripts/verify-beast.cjs buy_draco 7       # proves substitution + multiplier
```

If the math is re-run, resync the config:

```bash
node scripts/sync-math-config.mjs
```

## Gotchas already paid for — do not relearn

- **`config.numRows` IS NOT READ ANYWHERE.** The board size comes from
  `INITIAL_BOARD.length` x `INITIAL_BOARD[0].length - 2` in `constants.ts`. A
  correct config still rendered 5x3 until that literal was fixed.
- **Never position an overlay from a symbol's live `symbolY()`** — that is the spin
  tween, so the overlay inherits the reel animation and appears to be spun down
  with the reels. Use the static formula `(row - 0.5) * SYMBOL_SIZE`.
- **Cell coordinates in book events are PADDED board space**: the reveal board is 6
  rows, visible rows are 1..4, rows 0 and 5 are padding.
- **The math emits `symbols` as a LIST of single-key objects** while the frontend
  indexes it by name. `sync-math-config.mjs` flattens it. Hand-copying the config
  would make every symbol lookup silently miss.
- **`beastShape` is `{reels, rows}`, not an array.**
- **Story names must start with a letter** — Storybook derives a JS identifier from
  them, so `"3 scatters"` fails to index.
- **Money in books is x100.** `payoutMultiplier: 19970` = 199.70x.
- **`SUPERSPIN` is hardcoded** in `bookEventHandlerMap.ts` and `Sound.svelte` from
  the sample. Starwake has no such mode; those branches are dead and want remapping
  to our real keys.
- **WIN counter glyph artifact**: a stray bar renders after the amount during the
  count-up. Reproduces on untouched upstream code and in `apps/keybearer`, and
  upstream web-sdk has not changed since 2025-11-28 — so it is an SDK/browser
  issue, not ours. Suspect a Chrome canvas-text change (seen on Chrome 148-150);
  worth confirming in Firefox. If it must be fixed, switch that label from `Text`
  to `BitmapText`, which is what PixiJS recommends for values that animate.

## Remaining frontend work (rough order)

1. Six-mode buy menu + the >2x cost confirmation dialog (compliance)
2. Info/rules screen: per-mode RTP, cost, max win, full paytable, the enumerable
   multiplier ladders, mystery odds (35.16 / 29.64 / 25.15 / 10.05%)
3. Replay mode (`replay=true` param, fetch `/bet/replay/...`) — **mandatory**
4. Art + sound pass
5. Popout/mini-player view, mobile scaling
6. Language files with `sweeps_<lang>` variants for stake.us
7. Remap `SUPERSPIN`

## Open product calls (decide at playtest, not from code)

- **Base tail is thin** — 95% of base RTP lands under 400x vs a market 3,100-45,933x.
  Only fix is base-boost, which is a full math re-sim. Parked deliberately.
- **All beasts are 2x2** — does Draco feel like the showpiece, or identical to Corvus?
- **Ladders open at x1** (corvus 3 rungs, ursa 4) — documented UX watch-item from the
  ladder sweep. Cheapest fix is presentational: hide the multiplier badge until it
  passes x2 rather than showing "x1".
- **60% of paying base spins return less than stake.** Suggested rule: no win
  celebration under 1x stake — quiet count-up only.
