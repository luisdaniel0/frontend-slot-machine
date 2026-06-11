#!/usr/bin/env python3
"""Curate Storybook fixture data from math-sdk generated books.

Reads books_base.json / books_bonus.json from the math repo and writes the
four files in src/stories/data/ that the MODE_BASE / MODE_BONUS stories
replay. Rerun after regenerating math outputs.

Payout multipliers in the books are in hundredths of the bet (100 = 1x).
"""

import json
import re
from pathlib import Path

MATH_BOOKS = Path.home() / 'projects/math-sdk/games/0_0_worldcup/library/books'
OUT = Path(__file__).resolve().parent.parent / 'src/stories/data'

EVENT_KEYS = [
    'reveal', 'setTotalWin', 'finalWin', 'freeSpinTrigger',
    'updateFreeSpin', 'winInfo', 'setWin', 'freeSpinEnd',
]

IDENT = re.compile(r'^[A-Za-z_$][A-Za-z0-9_$]*$')


def ts(v, ind=1):
    t = '\t' * ind
    if isinstance(v, dict):
        items = [(k, val) for k, val in v.items() if val is not None]
        if not items:
            return '{}'
        rows = [f"{t}{k if IDENT.match(k) else repr(k)}: {ts(val, ind + 1)}," for k, val in items]
        return '{\n' + '\n'.join(rows) + '\n' + '\t' * (ind - 1) + '}'
    if isinstance(v, list):
        if not v:
            return '[]'
        rows = [f"{t}{ts(x, ind + 1)}," for x in v]
        return '[\n' + '\n'.join(rows) + '\n' + '\t' * (ind - 1) + ']'
    if isinstance(v, bool):
        return 'true' if v else 'false'
    if isinstance(v, str):
        return f"'{v}'"
    return repr(v)


def write_ts(path, value):
    path.write_text('export default ' + ts(value) + ';\n')
    print(f'wrote {path.relative_to(OUT.parent.parent)}')


def has(book, event_type):
    return any(e['type'] == event_type for e in book['events'])


def closest(books, target_payout):
    return min(books, key=lambda b: abs(b['payoutMultiplier'] - target_payout))


def pick(books, why, chosen):
    chosen.append((books, why))
    return books


def curate(mode, books):
    chosen = []  # (book, reason)
    pays = sorted(b['payoutMultiplier'] for b in books)
    median = pays[len(pays) // 2]

    if mode == 'base':
        plain = [b for b in books if not has(b, 'freeSpinTrigger')]
        triggers = [b for b in books if has(b, 'freeSpinTrigger')]
        pick(min(plain, key=lambda b: (b['payoutMultiplier'], len(b['events']))),
             'dead spin (0x): the most common outcome, quickest to replay', chosen)
        pick(closest([b for b in plain if b['payoutMultiplier'] > 0], 50),
             'small line win (~0.5x): typical winInfo/setWin/setTotalWin flow', chosen)
        pick(max(plain, key=lambda b: b['payoutMultiplier']),
             'biggest pure line win in the sample (no freespins)', chosen)
        trig_median = sorted(t['payoutMultiplier'] for t in triggers)[len(triggers) // 2]
        pick(closest(triggers, trig_median),
             'natural freespin trigger with a median freegame payout', chosen)
    else:
        retrig = [b for b in books if has(b, 'freeSpinRetrigger')]
        wincap = [b for b in books if has(b, 'wincap')]
        plain = [b for b in books if not has(b, 'freeSpinRetrigger') and not has(b, 'wincap')]
        pick(closest(plain, pays[len(pays) // 4]),
             'modest bonus (~p25 payout): the common buy outcome', chosen)
        pick(closest(plain, median),
             'median bonus: representative multiplier-wild action', chosen)
        pick(closest(retrig, sorted(r['payoutMultiplier'] for r in retrig)[len(retrig) // 2]),
             'retrigger book: contains freeSpinRetrigger (handler TODO)', chosen)
        pick(min(wincap, key=lambda b: len(b['events'])),
             'wincap book: 5000x max win, contains wincap event (handler TODO)', chosen)

    return chosen


def extract_events(books):
    events = {}
    for key in EVENT_KEYS:
        for book in books:
            found = next((e for e in book['events'] if e['type'] == key), None)
            if found:
                events[key] = found
                break
        assert key in events, f'no {key} event found'
    return events


def main():
    for mode in ['base', 'bonus']:
        books = json.loads((MATH_BOOKS / f'books_{mode}.json').read_text())
        chosen = curate(mode, books)
        print(f'\n=== {mode.upper()} picks ===')
        for book, why in chosen:
            kinds = sorted({e['type'] for e in book['events']})
            print(f"  id {book['id']}: {book['payoutMultiplier'] / 100}x, "
                  f"{len(book['events'])} events {kinds} — {why}")
        write_ts(OUT / f'{mode}_books.ts', [b for b, _ in chosen])
        write_ts(OUT / f'{mode}_events.ts', extract_events([b for b, _ in chosen] + books))


if __name__ == '__main__':
    main()
