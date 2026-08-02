import _ from 'lodash';
import type { Tween } from 'svelte/motion';

import { stateBet } from 'state-shared';
import { createEnhanceBoard, createReelForSpinning } from 'utils-slots';
import { createGetWinLevelDataByWinLevelAlias } from 'utils-shared/winLevel';

import type { GameType, RawSymbol, SymbolState, Position } from './types';
import type { ConstellationTier } from './typesBookEvent';
import { stateLayoutDerived } from './stateLayout';
import { winLevelMap } from './winLevelMap';
import { eventEmitter } from './eventEmitter';
import {
	SYMBOL_SIZE,
	BOARD_SIZES,
	INITIAL_BOARD,
	BOARD_DIMENSIONS,
	SPIN_OPTIONS_DEFAULT,
	SPIN_OPTIONS_FAST,
	INITIAL_SYMBOL_STATE,
	SCATTER_LAND_SOUND_MAP,
} from './constants';

const onSymbolLand = ({ rawSymbol }: { rawSymbol: RawSymbol }) => {
	if (rawSymbol.name === 'S') {
		eventEmitter.broadcast({ type: 'soundScatterCounterIncrease' });
		eventEmitter.broadcast({
			type: 'soundOnce',
			name: SCATTER_LAND_SOUND_MAP[scatterLandIndex()],
		});
	}

	if (rawSymbol.name === 'W') {
		eventEmitter.broadcast({
			type: 'soundOnce',
			name: 'sfx_multiplier_landing',
		});
	}
};

const board = _.range(BOARD_DIMENSIONS.x).map((reelIndex) => {
	const reel = createReelForSpinning({
		reelIndex,
		symbolHeight: SYMBOL_SIZE,
		initialSymbols: INITIAL_BOARD[reelIndex],
		initialSymbolState: INITIAL_SYMBOL_STATE,
		onReelStopping: () => {
			eventEmitter.broadcast({
				type: 'soundOnce',
				name: 'sfx_reel_stop_1',
				forcePlay: !stateBet.isTurbo,
			});
		},
		onSymbolLand,
	});

	reel.reelState.spinOptions = () =>
		reel.reelState.spinType === 'fast' ? SPIN_OPTIONS_FAST : SPIN_OPTIONS_DEFAULT;

	return reel;
});

export type Reel = (typeof board)[number];
export type ReelSymbol = Reel['reelState']['symbols'][number];

export type MultiplierSymbol = {
	initX: number;
	initY: number;
	symbolX: Tween<number>;
	symbolY: Tween<number>;
	rawSymbol: RawSymbol;
	symbolState: SymbolState;
	oncomplete: () => void;
};

/**
 * Starwake feature state: the dealt constellation, which cells are lit, and the
 * woken beast. Driven entirely by book events (constellationDealt / starLit /
 * beastWake / beastRoam / multiplierClimb) and reset on each new deal, so it is
 * a projection of the book tape -- never a source of truth of its own.
 *
 * Cell coordinates are PADDED board space, matching `reveal.board` (6 rows;
 * visible rows are 1..4).
 */
export type ConstellationState = {
	active: boolean;
	tier: ConstellationTier | undefined;
	/** Every target cell of the dealt constellation. */
	cells: Position[];
	/** Target cells lit so far -- each is a sticky wild. */
	lit: Position[];
	totalCells: number;
	complete: boolean;
	/** Beast footprint this spin; empty until it wakes. */
	beastCells: Position[];
	beastShape: number[] | undefined;
	multiplier: number;
};

const initialConstellation = (): ConstellationState => ({
	active: false,
	tier: undefined,
	cells: [],
	lit: [],
	totalCells: 0,
	complete: false,
	beastCells: [],
	beastShape: undefined,
	multiplier: 0,
});

export const stateGame = $state({
	board,
	gameType: 'basegame' as GameType,
	multiplierBoard: [] as (MultiplierSymbol | undefined)[][],
	scatterCounter: 0,
	constellation: initialConstellation(),
});

export const resetConstellation = () => {
	stateGame.constellation = initialConstellation();
};

/** True if (reel,row) is a target cell of the current constellation. */
const isConstellationCell = (reel: number, row: number) =>
	stateGame.constellation.cells.some((c) => c.reel === reel && c.row === row);

/** True if that target cell is already lit (i.e. a sticky wild). */
const isConstellationCellLit = (reel: number, row: number) =>
	stateGame.constellation.lit.some((c) => c.reel === reel && c.row === row);

/** True if the woken beast currently covers (reel,row). */
const isBeastCell = (reel: number, row: number) =>
	stateGame.constellation.beastCells.some((c) => c.reel === reel && c.row === row);

const boardLayout = () => ({
	x: stateLayoutDerived.mainLayout().width * 0.5,
	y: stateLayoutDerived.mainLayout().height * 0.5,
	anchor: { x: 0.5, y: 0.5 },
	pivot: { x: BOARD_SIZES.width / 2, y: BOARD_SIZES.height / 2 },
	...BOARD_SIZES,
});

const boardRaw = () =>
	board.map((reel) => reel.reelState.symbols.map((reelSymbol) => reelSymbol.rawSymbol));

const scatterLandIndex = () => {
	if (stateGame.scatterCounter > 5) return 5;
	if (stateGame.scatterCounter < 1) return 1;
	return stateGame.scatterCounter as 1 | 2 | 3 | 4 | 5;
};

const { enhanceBoard } = createEnhanceBoard();
const enhancedBoard = enhanceBoard({ board: stateGame.board });

export const { getWinLevelDataByWinLevelAlias } = createGetWinLevelDataByWinLevelAlias({
	winLevelMap,
});

export const stateGameDerived = {
	onSymbolLand,
	boardLayout,
	boardRaw,
	scatterLandIndex,
	enhancedBoard,
	getWinLevelDataByWinLevelAlias,
	isConstellationCell,
	isConstellationCellLit,
	isBeastCell,
};
