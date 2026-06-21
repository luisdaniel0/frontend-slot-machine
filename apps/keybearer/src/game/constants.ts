import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

export const SYMBOL_SIZE = 120;

export const REEL_PADDING = 0.53;

// initial board (padded top and bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	[
		{
			name: 'L2',
		},
		{
			name: 'L1',
		},
		{
			name: 'L4',
		},
		{
			name: 'H2',
		},
		{
			name: 'L1',
		},
		{
			name: 'L3',
		},
	],
	[
		{
			name: 'H1',
		},
		{
			name: 'L5',
		},
		{
			name: 'L2',
		},
		{
			name: 'H3',
		},
		{
			name: 'L4',
		},
		{
			name: 'H2',
		},
	],
	[
		{
			name: 'L3',
		},
		{
			name: 'L5',
		},
		{
			name: 'L3',
		},
		{
			name: 'H4',
		},
		{
			name: 'L4',
		},
		{
			name: 'L1',
		},
	],
	[
		{
			name: 'H4',
		},
		{
			name: 'H3',
		},
		{
			name: 'L4',
		},
		{
			name: 'L5',
		},
		{
			name: 'L1',
		},
		{
			name: 'L2',
		},
	],
	[
		{
			name: 'H3',
		},
		{
			name: 'L3',
		},
		{
			name: 'L3',
		},
		{
			name: 'H1',
		},
		{
			name: 'H1',
		},
		{
			name: 'L5',
		},
	],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const SPIN_OPTIONS_SHARED = {
	reelBounceBackSpeed: 0.15,
	reelSpinSpeedBeforeBounce: 4,
	reelPaddingMultiplierNormal: 1.2,
	reelPaddingMultiplierAnticipated: 10,
	reelSpinDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	reelPreSpinSpeed: 2,
	reelSpinSpeed: 3,
	reelBounceSizeMulti: 0.3,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	reelPreSpinSpeed: 5,
	reelSpinSpeed: 5,
	reelBounceSizeMulti: 0.05,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

const explosion = {
	type: 'spine',
	assetKey: 'explosion',
	animationName: 'explosion',
	sizeRatios: { width: 1, height: 1 },
};

// Keybearer Design System art. Every symbol is a single SVG (rasterized by
// Pixi), shown for all states until animated production art is authored.
// `as const` keeps `type: 'sprite'` a literal so Symbol.svelte's sprite/spine
// discrimination stays correct.
const h1Static = { type: 'sprite', assetKey: 'sym_H1', sizeRatios: { width: 1, height: 1 } } as const;
const h2Static = { type: 'sprite', assetKey: 'sym_H2', sizeRatios: { width: 1, height: 1 } } as const;
const h3Static = { type: 'sprite', assetKey: 'sym_H3', sizeRatios: { width: 1, height: 1 } } as const;
const h4Static = { type: 'sprite', assetKey: 'sym_H4', sizeRatios: { width: 1, height: 1 } } as const;

const l1Static = { type: 'sprite', assetKey: 'sym_L1', sizeRatios: { width: 1, height: 1 } } as const;
const l2Static = { type: 'sprite', assetKey: 'sym_L2', sizeRatios: { width: 1, height: 1 } } as const;
const l3Static = { type: 'sprite', assetKey: 'sym_L3', sizeRatios: { width: 1, height: 1 } } as const;
const l4Static = { type: 'sprite', assetKey: 'sym_L4', sizeRatios: { width: 1, height: 1 } } as const;
const l5Static = { type: 'sprite', assetKey: 'sym_L5', sizeRatios: { width: 1, height: 1 } } as const;

const kStatic = { type: 'sprite', assetKey: 'sym_K', sizeRatios: { width: 1, height: 1 } } as const;
const wStatic = { type: 'sprite', assetKey: 'sym_W', sizeRatios: { width: 1, height: 1 } } as const;

// All states map to the single static SVG per symbol. `explosion` keeps the
// generic spine (only fires in tumble flows, unused by this lines game).
export const SYMBOL_INFO_MAP = {
	H1: { explosion, postWinStatic: h1Static, static: h1Static, spin: h1Static, land: h1Static, win: h1Static },
	H2: { explosion, postWinStatic: h2Static, static: h2Static, spin: h2Static, land: h2Static, win: h2Static },
	H3: { explosion, postWinStatic: h3Static, static: h3Static, spin: h3Static, land: h3Static, win: h3Static },
	H4: { explosion, postWinStatic: h4Static, static: h4Static, spin: h4Static, land: h4Static, win: h4Static },
	L1: { explosion, postWinStatic: l1Static, static: l1Static, spin: l1Static, land: l1Static, win: l1Static },
	L2: { explosion, postWinStatic: l2Static, static: l2Static, spin: l2Static, land: l2Static, win: l2Static },
	L3: { explosion, postWinStatic: l3Static, static: l3Static, spin: l3Static, land: l3Static, win: l3Static },
	L4: { explosion, postWinStatic: l4Static, static: l4Static, spin: l4Static, land: l4Static, win: l4Static },
	L5: { explosion, postWinStatic: l5Static, static: l5Static, spin: l5Static, land: l5Static, win: l5Static },
	W: { explosion, postWinStatic: wStatic, static: wStatic, spin: wStatic, land: wStatic, win: wStatic },
	// K (Key) scatter
	K: { explosion, postWinStatic: kStatic, static: kStatic, spin: kStatic, land: kStatic, win: kStatic },
} as const;

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
