export default {
	reveal: {
		index: 0,
		type: 'reveal',
		board: [
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
					name: 'H1',
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
					name: 'L3',
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
					name: 'H2',
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
					name: 'L1',
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
					name: 'H3',
				},
			],
		],
		paddingPositions: [216, 205, 195, 16, 65],
		gameType: 'basegame',
		anticipation: [0, 0, 0, 0, 0],
	},
	setTotalWin: {
		index: 1,
		type: 'setTotalWin',
		amount: 0,
	},
	finalWin: {
		index: 2,
		type: 'finalWin',
		amount: 0,
	},
	freeSpinTrigger: {
		index: 4,
		type: 'freeSpinTrigger',
		totalFs: 12,
		positions: [
			{
				reel: 0,
				row: 1,
			},
			{
				reel: 2,
				row: 2,
			},
			{
				reel: 3,
				row: 1,
			},
			{
				reel: 4,
				row: 1,
			},
		],
	},
	updateFreeSpin: {
		index: 5,
		type: 'updateFreeSpin',
		amount: 0,
		total: 12,
	},
	winInfo: {
		index: 1,
		type: 'winInfo',
		totalWin: 50,
		wins: [
			{
				symbol: 'L4',
				kind: 4,
				win: 50,
				positions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
				],
				meta: {
					lineIndex: 6,
					multiplier: 1,
					winWithoutMult: 50,
					globalMult: 1,
					lineMultiplier: 1,
				},
			},
		],
	},
	setWin: {
		index: 2,
		type: 'setWin',
		amount: 50,
		winLevel: 2,
	},
	freeSpinEnd: {
		index: 53,
		type: 'freeSpinEnd',
		amount: 1650,
		winLevel: 4,
	},
};
