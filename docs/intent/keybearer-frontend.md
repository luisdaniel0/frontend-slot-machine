# Keybearer — Frontend (web-sdk client) Intent

Confirmed via interview-me on 2026-06-19.

- **Outcome:** Fork web-sdk's `apps/lines` into a new `apps/keybearer` client and get a
  functional skeleton spinning against Keybearer's real math-sdk output.
- **User:** The developer (learner), building toward a real, submittable Stake Engine game;
  the player is the eventual audience.
- **Why now:** Math is built through Section 7 (5×4 board, 20 paylines, Key scatters, climbing
  Vault multiplier, reels, RTP ~0.96). The frontend is the unbuilt half.
- **Success (this phase):** Board renders 5×4, reads the books/sim output, spins resolve,
  paylines + Key scatters + the Vault multiplier display correctly — no art polish required yet.
- **Constraint:** Learner pace — modify step-by-step and explain each piece; do NOT bulk-complete.
  End goal is a polished, Stake-submittable slot.
- **Out of scope (this phase):** Final symbol art, animations, juice/sound, polish passes —
  those come after the skeleton works.

## Notes from initial exploration
- Fork target: `apps/lines` (frontend counterpart to the `0_0_lines` math fork). NOT `worldcup`.
- `apps/lines/src/components/GlobalMultiplier.svelte` already exists — likely the hook for the
  Vault multiplier (engine `global_multiplier`).
- Math source: `math-sdk/games/0_0_keybearer`.

## How apps/lines is structured (orientation for the build)

A web-sdk game splits into **logic** (`src/game/`) and **rendering** (`src/components/`). The client
does NOT compute outcomes — the math-sdk sim produces "books" (event streams) and the client REPLAYS them.

**`src/game/` — the brain (most math-wiring work happens here):**
- `config.ts` — board dims, bet modes, symbol definitions → declare 5×4 / 20 lines / Keybearer symbols.
- `assets.ts` — registers art/audio (skeleton phase: placeholders).
- `bookEventHandlerMap.ts` + `typesBookEvent.ts` — THE bridge to the math: maps each book event type
  (reveal board, show win, update multiplier, …) to a client action. Must cover every event the sim emits.
- `stateGame.svelte.ts`, `stateXstate.ts`, `stateApp.ts`, `stateLayout.ts` — game state.
- `actor.ts`, `eventEmitter.ts` — orchestration: steps through book events and drives animations.

**`src/components/` — rendering (Svelte):**
- `Board.svelte`, `BoardBase.svelte`, `ReelSymbol.svelte`, `Symbol.svelte` — reels + symbols.
- `Win.svelte`, `WinAnimation.svelte`, `WinCoins.svelte` — payline win presentation.
- `GlobalMultiplier.svelte` — likely maps to the Vault.
- `FreeSpin*.svelte` — FG intro/outro/counter UI (Standard / Super / Mega FG).

**Suggested first step:** read `apps/lines/src/game/config.ts` and `bookEventHandlerMap.ts` together —
they define the math↔client contract. Then fork `apps/lines` → `apps/keybearer` and retarget.
