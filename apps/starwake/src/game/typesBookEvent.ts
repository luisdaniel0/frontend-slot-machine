import type { BetType } from 'rgs-requests';

import type { SymbolName, RawSymbol, GameType, Position } from './types';

// book events shared with scatter game
type BookEventReveal = {
	index: number;
	type: 'reveal';
	board: RawSymbol[][];
	paddingPositions: number[];
	anticipation: number[];
	gameType: GameType;
};

type BookEventSetTotalWin = {
	index: number;
	type: 'setTotalWin';
	amount: number;
};

type BookEventFinalWin = {
	index: number;
	type: 'finalWin';
	amount: number;
};

type BookEventFreeSpinTrigger = {
	index: number;
	type: 'freeSpinTrigger';
	totalFs: number;
	positions: Position[];
};

type BookEventUpdateFreeSpin = {
	index: number;
	type: 'updateFreeSpin';
	amount: number;
	total: number;
};

type BookEventSetWin = {
	index: number;
	type: 'setWin';
	amount: number;
	winLevel: number;
};

type BookEventFreeSpinEnd = {
	index: number;
	type: 'freeSpinEnd';
	amount: number;
	winLevel: number;
};

type BookEventWinInfo = {
	index: number;
	type: 'winInfo';
	totalWin: number;
	wins: {
		symbol: SymbolName;
		kind: number;
		win: number;
		positions: Position[];
		meta: {
			lineIndex: number;
			multiplier: number;
			winWithoutMult: number;
			globalMult: number;
			lineMultiplier: number;
		};
	}[];
};

// customised
type BookEventCreateBonusSnapshot = {
	index: number;
	type: 'createBonusSnapshot';
	bookEvents: BookEvent[];
};

// --- Starwake: charge -> bloom -> roam -------------------------------------
// Emitted by games/starwake/game_events.py. Cell coordinates are PADDED board
// space (the reveal board is 6 rows tall: index 0 and 5 are padding, so the
// visible rows are 1..4) -- render them against the same indices as `reveal`.

/** Constellation tier. `ascendant` is the mystery-exclusive pre-lit Draco. */
export type ConstellationTier = 'corvus' | 'ursa' | 'draco' | 'ascendant';

/** Feature entry: the dim outline is dealt onto the board. */
type BookEventConstellationDealt = {
	index: number;
	type: 'constellationDealt';
	tier: ConstellationTier;
	beast: ConstellationTier;
	cells: Position[];
	totalCells: number;
	/** Cells already lit at deal time -- only Ascendant has these. */
	prelit: Position[];
	litCount: number;
};

/** One or more cells lit because a winning payline crossed them. */
type BookEventStarLit = {
	index: number;
	type: 'starLit';
	newlyLit: Position[];
	litCount: number;
	totalCells: number;
	/** True on the event that completes the set -- beastWake follows. */
	complete: boolean;
};

/** The constellation completed: the beast wakes as a block wild. */
type BookEventBeastWake = {
	index: number;
	type: 'beastWake';
	tier: ConstellationTier;
	beast: ConstellationTier;
	/** Block footprint in cells -- currently {reels:2, rows:2} for every tier. */
	beastShape: { reels: number; rows: number };
};

/** The woken beast moves; `cells` is its footprint this spin. */
type BookEventBeastRoam = {
	index: number;
	type: 'beastRoam';
	cells: Position[];
	multiplier: number;
};

/** The beast's multiplier steps one rung up its published ladder. */
type BookEventMultiplierClimb = {
	index: number;
	type: 'multiplierClimb';
	multiplier: number;
};

/** The round reached the mode's published ceiling. */
type BookEventWincap = {
	index: number;
	type: 'wincap';
	amount: number;
};

export type BookEvent =
	| BookEventReveal
	| BookEventWinInfo
	| BookEventSetTotalWin
	| BookEventFreeSpinTrigger
	| BookEventUpdateFreeSpin
	| BookEventFinalWin
	| BookEventSetWin
	| BookEventFreeSpinEnd
	// customised
	| BookEventCreateBonusSnapshot
	| BookEventConstellationDealt
	| BookEventStarLit
	| BookEventBeastWake
	| BookEventBeastRoam
	| BookEventMultiplierClimb
	| BookEventWincap;

export type Bet = BetType<BookEvent>;
export type BookEventOfType<T> = Extract<BookEvent, { type: T }>;
export type BookEventContext = { bookEvents: BookEvent[] };
