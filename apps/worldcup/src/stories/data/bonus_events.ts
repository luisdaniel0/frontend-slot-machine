export default {
	reveal: {
		index: 0,
		type: 'reveal',
		board: [
			[
				{
					name: 'L1',
				},
				{
					name: 'H2',
				},
				{
					name: 'S',
					scatter: true,
				},
				{
					name: 'L4',
				},
				{
					name: 'L2',
				},
				{
					name: 'H4',
				},
			],
			[
				{
					name: 'L5',
				},
				{
					name: 'H4',
				},
				{
					name: 'L4',
				},
				{
					name: 'L5',
				},
				{
					name: 'H2',
				},
				{
					name: 'L5',
				},
			],
			[
				{
					name: 'H4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H2',
				},
				{
					name: 'S',
					scatter: true,
				},
				{
					name: 'L4',
				},
				{
					name: 'L5',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'L1',
				},
				{
					name: 'L3',
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
			],
			[
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
					name: 'S',
					scatter: true,
				},
				{
					name: 'H2',
				},
				{
					name: 'H3',
				},
			],
		],
		paddingPositions: [166, 68, 212, 181, 7],
		gameType: 'basegame',
		anticipation: [0, 0, 0, 1, 2],
	},
	setTotalWin: {
		index: 1,
		type: 'setTotalWin',
		amount: 0,
	},
	finalWin: {
		index: 34,
		type: 'finalWin',
		amount: 530,
	},
	freeSpinTrigger: {
		index: 2,
		type: 'freeSpinTrigger',
		totalFs: 8,
		positions: [
			{
				reel: 0,
				row: 2,
			},
			{
				reel: 2,
				row: 3,
			},
			{
				reel: 4,
				row: 3,
			},
		],
	},
	updateFreeSpin: {
		index: 3,
		type: 'updateFreeSpin',
		amount: 0,
		total: 8,
	},
	winInfo: {
		index: 5,
		type: 'winInfo',
		totalWin: 30,
		wins: [
			{
				symbol: 'L1',
				kind: 3,
				win: 30,
				positions: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
				],
				meta: {
					lineIndex: 9,
					multiplier: 1,
					winWithoutMult: 30,
					globalMult: 1,
					lineMultiplier: 1,
				},
			},
		],
	},
	setWin: {
		index: 6,
		type: 'setWin',
		amount: 30,
		winLevel: 2,
	},
	freeSpinEnd: {
		index: 33,
		type: 'freeSpinEnd',
		amount: 530,
		winLevel: 3,
	},
};
