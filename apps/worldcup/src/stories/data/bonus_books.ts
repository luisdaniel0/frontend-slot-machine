export default [
	{
		id: 37,
		payoutMultiplier: 530,
		events: [
			{
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
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
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
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 0,
				total: 8,
			},
			{
				index: 4,
				type: 'reveal',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H2',
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
							name: 'L2',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [186, 78, 121, 195, 149],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
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
			{
				index: 6,
				type: 'setWin',
				amount: 30,
				winLevel: 2,
			},
			{
				index: 7,
				type: 'setTotalWin',
				amount: 30,
			},
			{
				index: 8,
				type: 'updateFreeSpin',
				amount: 1,
				total: 8,
			},
			{
				index: 9,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
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
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
					],
				],
				paddingPositions: [21, 135, 125, 36, 111],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 10,
				type: 'setTotalWin',
				amount: 30,
			},
			{
				index: 11,
				type: 'updateFreeSpin',
				amount: 2,
				total: 8,
			},
			{
				index: 12,
				type: 'reveal',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [2, 97, 95, 184, 137],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 13,
				type: 'setTotalWin',
				amount: 30,
			},
			{
				index: 14,
				type: 'updateFreeSpin',
				amount: 3,
				total: 8,
			},
			{
				index: 15,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H3',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'L5',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [157, 129, 6, 37, 121],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 16,
				type: 'winInfo',
				totalWin: 480,
				wins: [
					{
						symbol: 'H3',
						kind: 3,
						win: 400,
						positions: [
							{
								reel: 0,
								row: 2,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 2,
							},
						],
						meta: {
							lineIndex: 2,
							multiplier: 4,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 4,
						},
					},
					{
						symbol: 'L5',
						kind: 3,
						win: 20,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 5,
							multiplier: 2,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 2,
						},
					},
					{
						symbol: 'L5',
						kind: 3,
						win: 20,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 1,
							},
						],
						meta: {
							lineIndex: 13,
							multiplier: 2,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 2,
						},
					},
					{
						symbol: 'L5',
						kind: 3,
						win: 40,
						positions: [
							{
								reel: 0,
								row: 2,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 1,
							},
						],
						meta: {
							lineIndex: 15,
							multiplier: 4,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 4,
						},
					},
				],
			},
			{
				index: 17,
				type: 'setWin',
				amount: 480,
				winLevel: 4,
			},
			{
				index: 18,
				type: 'setTotalWin',
				amount: 510,
			},
			{
				index: 19,
				type: 'updateFreeSpin',
				amount: 4,
				total: 8,
			},
			{
				index: 20,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
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
							name: 'H4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
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
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
					],
				],
				paddingPositions: [117, 22, 30, 197, 100],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 21,
				type: 'setTotalWin',
				amount: 510,
			},
			{
				index: 22,
				type: 'updateFreeSpin',
				amount: 5,
				total: 8,
			},
			{
				index: 23,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
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
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
					],
				],
				paddingPositions: [73, 163, 67, 45, 110],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 24,
				type: 'setTotalWin',
				amount: 510,
			},
			{
				index: 25,
				type: 'updateFreeSpin',
				amount: 6,
				total: 8,
			},
			{
				index: 26,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'H2',
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
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L5',
						},
					],
				],
				paddingPositions: [7, 37, 109, 61, 93],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 27,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						kind: 3,
						win: 20,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 4,
							},
						],
						meta: {
							lineIndex: 16,
							multiplier: 1,
							winWithoutMult: 20,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
				],
			},
			{
				index: 28,
				type: 'setWin',
				amount: 20,
				winLevel: 2,
			},
			{
				index: 29,
				type: 'setTotalWin',
				amount: 530,
			},
			{
				index: 30,
				type: 'updateFreeSpin',
				amount: 7,
				total: 8,
			},
			{
				index: 31,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
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
							name: 'H2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [7, 191, 134, 188, 145],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 32,
				type: 'setTotalWin',
				amount: 530,
			},
			{
				index: 33,
				type: 'freeSpinEnd',
				amount: 530,
				winLevel: 3,
			},
			{
				index: 34,
				type: 'finalWin',
				amount: 530,
			},
		],
		criteria: 'freegame',
		baseGameWins: 0.0,
		freeGameWins: 5.3,
	},
	{
		id: 193,
		payoutMultiplier: 1740,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
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
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
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
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H2',
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
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'S',
							scatter: true,
						},
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
					],
				],
				paddingPositions: [165, 173, 166, 9, 166],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 1, 2],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'freeSpinTrigger',
				totalFs: 12,
				positions: [
					{
						reel: 0,
						row: 3,
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
						row: 2,
					},
				],
			},
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 0,
				total: 12,
			},
			{
				index: 4,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'L2',
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
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
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
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
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
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
					],
				],
				paddingPositions: [199, 161, 145, 55, 140],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 5,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 6,
				type: 'updateFreeSpin',
				amount: 1,
				total: 12,
			},
			{
				index: 7,
				type: 'reveal',
				board: [
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
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L5',
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
							name: 'L1',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [90, 119, 70, 22, 54],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 8,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 9,
				type: 'updateFreeSpin',
				amount: 2,
				total: 12,
			},
			{
				index: 10,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [182, 117, 42, 113, 56],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 1],
			},
			{
				index: 11,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 12,
				type: 'updateFreeSpin',
				amount: 3,
				total: 12,
			},
			{
				index: 13,
				type: 'reveal',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
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
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
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
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [54, 178, 23, 87, 108],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 14,
				type: 'winInfo',
				totalWin: 320,
				wins: [
					{
						symbol: 'L3',
						kind: 3,
						win: 80,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 1,
							},
						],
						meta: {
							lineIndex: 1,
							multiplier: 4,
							winWithoutMult: 20,
							globalMult: 1,
							lineMultiplier: 4,
						},
					},
					{
						symbol: 'L3',
						kind: 4,
						win: 240,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
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
							lineIndex: 7,
							multiplier: 4,
							winWithoutMult: 60,
							globalMult: 1,
							lineMultiplier: 4,
						},
					},
				],
			},
			{
				index: 15,
				type: 'setWin',
				amount: 320,
				winLevel: 4,
			},
			{
				index: 16,
				type: 'setTotalWin',
				amount: 320,
			},
			{
				index: 17,
				type: 'updateFreeSpin',
				amount: 4,
				total: 12,
			},
			{
				index: 18,
				type: 'reveal',
				board: [
					[
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
							name: 'L4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
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
					[
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
					],
				],
				paddingPositions: [105, 172, 124, 173, 143],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 19,
				type: 'setTotalWin',
				amount: 320,
			},
			{
				index: 20,
				type: 'updateFreeSpin',
				amount: 5,
				total: 12,
			},
			{
				index: 21,
				type: 'reveal',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H3',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
					],
				],
				paddingPositions: [107, 182, 128, 170, 126],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 22,
				type: 'winInfo',
				totalWin: 600,
				wins: [
					{
						symbol: 'L4',
						kind: 3,
						win: 60,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 5,
							multiplier: 6,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 6,
						},
					},
					{
						symbol: 'L5',
						kind: 3,
						win: 30,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 10,
							multiplier: 3,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 3,
						},
					},
					{
						symbol: 'L4',
						kind: 3,
						win: 30,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 2,
							},
						],
						meta: {
							lineIndex: 11,
							multiplier: 3,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 3,
						},
					},
					{
						symbol: 'H4',
						kind: 3,
						win: 480,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 18,
							multiplier: 6,
							winWithoutMult: 80,
							globalMult: 1,
							lineMultiplier: 6,
						},
					},
				],
			},
			{
				index: 23,
				type: 'setWin',
				amount: 600,
				winLevel: 5,
			},
			{
				index: 24,
				type: 'setTotalWin',
				amount: 920,
			},
			{
				index: 25,
				type: 'updateFreeSpin',
				amount: 6,
				total: 12,
			},
			{
				index: 26,
				type: 'reveal',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
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
							name: 'L2',
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
							name: 'L3',
						},
					],
				],
				paddingPositions: [83, 106, 123, 71, 200],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 27,
				type: 'setTotalWin',
				amount: 920,
			},
			{
				index: 28,
				type: 'updateFreeSpin',
				amount: 7,
				total: 12,
			},
			{
				index: 29,
				type: 'reveal',
				board: [
					[
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'H4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
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
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 5,
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [81, 161, 126, 40, 195],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 30,
				type: 'setTotalWin',
				amount: 920,
			},
			{
				index: 31,
				type: 'updateFreeSpin',
				amount: 8,
				total: 12,
			},
			{
				index: 32,
				type: 'reveal',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'H3',
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
							name: 'L4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
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
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [103, 26, 149, 29, 108],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 33,
				type: 'setTotalWin',
				amount: 920,
			},
			{
				index: 34,
				type: 'updateFreeSpin',
				amount: 9,
				total: 12,
			},
			{
				index: 35,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
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
							name: 'H2',
						},
						{
							name: 'L5',
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
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [169, 145, 88, 93, 185],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 36,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L4',
						kind: 3,
						win: 20,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 2,
							},
						],
						meta: {
							lineIndex: 20,
							multiplier: 2,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 2,
						},
					},
				],
			},
			{
				index: 37,
				type: 'setWin',
				amount: 20,
				winLevel: 2,
			},
			{
				index: 38,
				type: 'setTotalWin',
				amount: 940,
			},
			{
				index: 39,
				type: 'updateFreeSpin',
				amount: 10,
				total: 12,
			},
			{
				index: 40,
				type: 'reveal',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
							name: 'H1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L5',
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
							name: 'L3',
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
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [92, 26, 53, 106, 17],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 41,
				type: 'winInfo',
				totalWin: 800,
				wins: [
					{
						symbol: 'H1',
						kind: 3,
						win: 800,
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
							multiplier: 4,
							winWithoutMult: 200,
							globalMult: 1,
							lineMultiplier: 4,
						},
					},
				],
			},
			{
				index: 42,
				type: 'setWin',
				amount: 800,
				winLevel: 5,
			},
			{
				index: 43,
				type: 'setTotalWin',
				amount: 1740,
			},
			{
				index: 44,
				type: 'updateFreeSpin',
				amount: 11,
				total: 12,
			},
			{
				index: 45,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
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
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'S',
							scatter: true,
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [195, 35, 101, 201, 107],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 1, 2],
			},
			{
				index: 46,
				type: 'setTotalWin',
				amount: 1740,
			},
			{
				index: 47,
				type: 'freeSpinEnd',
				amount: 1740,
				winLevel: 4,
			},
			{
				index: 48,
				type: 'finalWin',
				amount: 1740,
			},
		],
		criteria: 'freegame',
		baseGameWins: 0.0,
		freeGameWins: 17.4,
	},
	{
		id: 119,
		payoutMultiplier: 2620,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L5',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L5',
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
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
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
							name: 'H1',
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
							name: 'L1',
						},
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [37, 95, 165, 189, 212],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 1, 2],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
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
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 0,
				total: 8,
			},
			{
				index: 4,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
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
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [27, 180, 172, 81, 76],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 5,
				type: 'winInfo',
				totalWin: 310,
				wins: [
					{
						symbol: 'H3',
						kind: 3,
						win: 300,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 4,
							},
						],
						meta: {
							lineIndex: 4,
							multiplier: 3,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 3,
						},
					},
					{
						symbol: 'L5',
						kind: 3,
						win: 10,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 5,
							multiplier: 1,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
				],
			},
			{
				index: 6,
				type: 'setWin',
				amount: 310,
				winLevel: 4,
			},
			{
				index: 7,
				type: 'setTotalWin',
				amount: 310,
			},
			{
				index: 8,
				type: 'updateFreeSpin',
				amount: 1,
				total: 8,
			},
			{
				index: 9,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
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
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [128, 130, 189, 29, 108],
				gameType: 'freegame',
				anticipation: [0, 0, 1, 2, 3],
			},
			{
				index: 10,
				type: 'winInfo',
				totalWin: 980,
				wins: [
					{
						symbol: 'H4',
						kind: 3,
						win: 800,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 1,
							},
						],
						meta: {
							lineIndex: 1,
							multiplier: 10,
							winWithoutMult: 80,
							globalMult: 1,
							lineMultiplier: 10,
						},
					},
					{
						symbol: 'L5',
						kind: 3,
						win: 100,
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
							multiplier: 10,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 10,
						},
					},
					{
						symbol: 'H4',
						kind: 3,
						win: 80,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 1,
							},
						],
						meta: {
							lineIndex: 13,
							multiplier: 1,
							winWithoutMult: 80,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
				],
			},
			{
				index: 11,
				type: 'setWin',
				amount: 980,
				winLevel: 5,
			},
			{
				index: 12,
				type: 'setTotalWin',
				amount: 1290,
			},
			{
				index: 13,
				type: 'updateFreeSpin',
				amount: 2,
				total: 8,
			},
			{
				index: 14,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
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
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
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
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
					],
				],
				paddingPositions: [114, 98, 101, 176, 154],
				gameType: 'freegame',
				anticipation: [0, 1, 2, 3, 4],
			},
			{
				index: 15,
				type: 'setTotalWin',
				amount: 1290,
			},
			{
				index: 16,
				type: 'freeSpinRetrigger',
				totalFs: 11,
				positions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
				],
			},
			{
				index: 17,
				type: 'updateFreeSpin',
				amount: 3,
				total: 11,
			},
			{
				index: 18,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
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
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H3',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
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
							name: 'L1',
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
						{
							name: 'L2',
						},
					],
					[
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
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [139, 181, 97, 22, 1],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 19,
				type: 'winInfo',
				totalWin: 500,
				wins: [
					{
						symbol: 'L1',
						kind: 4,
						win: 500,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 1,
							},
						],
						meta: {
							lineIndex: 17,
							multiplier: 5,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 5,
						},
					},
				],
			},
			{
				index: 20,
				type: 'setWin',
				amount: 500,
				winLevel: 5,
			},
			{
				index: 21,
				type: 'setTotalWin',
				amount: 1790,
			},
			{
				index: 22,
				type: 'updateFreeSpin',
				amount: 4,
				total: 11,
			},
			{
				index: 23,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'L2',
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
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H3',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [199, 182, 155, 54, 35],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 24,
				type: 'winInfo',
				totalWin: 60,
				wins: [
					{
						symbol: 'L2',
						kind: 3,
						win: 60,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 2,
							},
						],
						meta: {
							lineIndex: 11,
							multiplier: 3,
							winWithoutMult: 20,
							globalMult: 1,
							lineMultiplier: 3,
						},
					},
				],
			},
			{
				index: 25,
				type: 'setWin',
				amount: 60,
				winLevel: 2,
			},
			{
				index: 26,
				type: 'setTotalWin',
				amount: 1850,
			},
			{
				index: 27,
				type: 'updateFreeSpin',
				amount: 5,
				total: 11,
			},
			{
				index: 28,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
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
							name: 'H3',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 50,
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
							name: 'L2',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [89, 176, 109, 71, 71],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 29,
				type: 'setTotalWin',
				amount: 1850,
			},
			{
				index: 30,
				type: 'updateFreeSpin',
				amount: 6,
				total: 11,
			},
			{
				index: 31,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
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
							name: 'L1',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [128, 129, 90, 12, 82],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 32,
				type: 'setTotalWin',
				amount: 1850,
			},
			{
				index: 33,
				type: 'updateFreeSpin',
				amount: 7,
				total: 11,
			},
			{
				index: 34,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [39, 140, 154, 202, 20],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 35,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L2',
						kind: 3,
						win: 20,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 3,
							multiplier: 1,
							winWithoutMult: 20,
							globalMult: 1,
							lineMultiplier: 1,
						},
					},
				],
			},
			{
				index: 36,
				type: 'setWin',
				amount: 20,
				winLevel: 2,
			},
			{
				index: 37,
				type: 'setTotalWin',
				amount: 1870,
			},
			{
				index: 38,
				type: 'updateFreeSpin',
				amount: 8,
				total: 11,
			},
			{
				index: 39,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'L2',
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
							name: 'H4',
						},
						{
							name: 'H1',
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
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [152, 25, 63, 34, 106],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 40,
				type: 'winInfo',
				totalWin: 200,
				wins: [
					{
						symbol: 'L3',
						kind: 3,
						win: 80,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 3,
							multiplier: 4,
							winWithoutMult: 20,
							globalMult: 1,
							lineMultiplier: 4,
						},
					},
					{
						symbol: 'L3',
						kind: 3,
						win: 120,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 4,
							},
						],
						meta: {
							lineIndex: 16,
							multiplier: 6,
							winWithoutMult: 20,
							globalMult: 1,
							lineMultiplier: 6,
						},
					},
				],
			},
			{
				index: 41,
				type: 'setWin',
				amount: 200,
				winLevel: 4,
			},
			{
				index: 42,
				type: 'setTotalWin',
				amount: 2070,
			},
			{
				index: 43,
				type: 'updateFreeSpin',
				amount: 9,
				total: 11,
			},
			{
				index: 44,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 5,
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L5',
						},
					],
				],
				paddingPositions: [50, 38, 139, 93, 84],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 45,
				type: 'winInfo',
				totalWin: 400,
				wins: [
					{
						symbol: 'L2',
						kind: 4,
						win: 400,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 3,
							},
							{
								reel: 3,
								row: 1,
							},
						],
						meta: {
							lineIndex: 19,
							multiplier: 5,
							winWithoutMult: 80,
							globalMult: 1,
							lineMultiplier: 5,
						},
					},
				],
			},
			{
				index: 46,
				type: 'setWin',
				amount: 400,
				winLevel: 4,
			},
			{
				index: 47,
				type: 'setTotalWin',
				amount: 2470,
			},
			{
				index: 48,
				type: 'updateFreeSpin',
				amount: 10,
				total: 11,
			},
			{
				index: 49,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
						},
					],
					[
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'L1',
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
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [135, 141, 144, 156, 155],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 50,
				type: 'winInfo',
				totalWin: 150,
				wins: [
					{
						symbol: 'L4',
						kind: 4,
						win: 150,
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
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 9,
							multiplier: 3,
							winWithoutMult: 50,
							globalMult: 1,
							lineMultiplier: 3,
						},
					},
				],
			},
			{
				index: 51,
				type: 'setWin',
				amount: 150,
				winLevel: 3,
			},
			{
				index: 52,
				type: 'setTotalWin',
				amount: 2620,
			},
			{
				index: 53,
				type: 'freeSpinEnd',
				amount: 2620,
				winLevel: 5,
			},
			{
				index: 54,
				type: 'finalWin',
				amount: 2620,
			},
		],
		criteria: 'freegame',
		baseGameWins: 0.0,
		freeGameWins: 26.2,
	},
	{
		id: 615,
		payoutMultiplier: 500000,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
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
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L5',
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
							name: 'S',
							scatter: true,
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
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
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
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
							name: 'S',
							scatter: true,
						},
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
					],
				],
				paddingPositions: [164, 7, 9, 131, 166],
				gameType: 'basegame',
				anticipation: [0, 0, 1, 2, 3],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'freeSpinTrigger',
				totalFs: 12,
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
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
				],
			},
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 0,
				total: 12,
			},
			{
				index: 4,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L5',
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
							name: 'L5',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H2',
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
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [85, 74, 80, 33, 75],
				gameType: 'freegame',
				anticipation: [0, 0, 1, 2, 3],
			},
			{
				index: 5,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 6,
				type: 'updateFreeSpin',
				amount: 1,
				total: 12,
			},
			{
				index: 7,
				type: 'reveal',
				board: [
					[
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 5,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 50,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 50,
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
							name: 'L5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
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
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [91, 61, 95, 65, 31],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 8,
				type: 'winInfo',
				totalWin: 500000,
				wins: [
					{
						symbol: 'H2',
						kind: 4,
						win: 46400,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 1,
							},
							{
								reel: 3,
								row: 1,
							},
						],
						meta: {
							lineIndex: 1,
							multiplier: 58,
							winWithoutMult: 800,
							globalMult: 1,
							lineMultiplier: 58,
						},
					},
					{
						symbol: 'H1',
						kind: 4,
						win: 120000,
						positions: [
							{
								reel: 0,
								row: 2,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 2,
							},
							{
								reel: 3,
								row: 2,
							},
						],
						meta: {
							lineIndex: 2,
							multiplier: 80,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 80,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 3000,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 3,
							multiplier: 30,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 30,
						},
					},
					{
						symbol: 'L4',
						kind: 3,
						win: 300,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 4,
							},
						],
						meta: {
							lineIndex: 4,
							multiplier: 30,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 30,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 2500,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 5,
							multiplier: 25,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 25,
						},
					},
					{
						symbol: 'L5',
						kind: 5,
						win: 12000,
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
							{
								reel: 4,
								row: 4,
							},
						],
						meta: {
							lineIndex: 6,
							multiplier: 80,
							winWithoutMult: 150,
							globalMult: 1,
							lineMultiplier: 80,
						},
					},
					{
						symbol: 'L5',
						kind: 4,
						win: 2320,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
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
							lineIndex: 7,
							multiplier: 58,
							winWithoutMult: 40,
							globalMult: 1,
							lineMultiplier: 58,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 3000,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 8,
							multiplier: 30,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 30,
						},
					},
					{
						symbol: 'L5',
						kind: 4,
						win: 2520,
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
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 9,
							multiplier: 63,
							winWithoutMult: 40,
							globalMult: 1,
							lineMultiplier: 63,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 3000,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 10,
							multiplier: 30,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 30,
						},
					},
					{
						symbol: 'H1',
						kind: 4,
						win: 112500,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 2,
							},
							{
								reel: 3,
								row: 2,
							},
						],
						meta: {
							lineIndex: 11,
							multiplier: 75,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 75,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 3000,
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
								row: 3,
							},
						],
						meta: {
							lineIndex: 12,
							multiplier: 30,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 30,
						},
					},
					{
						symbol: 'H1',
						kind: 4,
						win: 112500,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 1,
							},
							{
								reel: 3,
								row: 2,
							},
						],
						meta: {
							lineIndex: 13,
							multiplier: 75,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 75,
						},
					},
					{
						symbol: 'L4',
						kind: 3,
						win: 300,
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
								row: 4,
							},
						],
						meta: {
							lineIndex: 14,
							multiplier: 30,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 30,
						},
					},
					{
						symbol: 'H1',
						kind: 4,
						win: 120000,
						positions: [
							{
								reel: 0,
								row: 2,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 1,
							},
							{
								reel: 3,
								row: 2,
							},
						],
						meta: {
							lineIndex: 15,
							multiplier: 80,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 80,
						},
					},
					{
						symbol: 'L4',
						kind: 3,
						win: 300,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 4,
							},
						],
						meta: {
							lineIndex: 16,
							multiplier: 30,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 30,
						},
					},
					{
						symbol: 'H2',
						kind: 5,
						win: 260000,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 1,
							},
							{
								reel: 4,
								row: 3,
							},
						],
						meta: {
							lineIndex: 17,
							multiplier: 65,
							winWithoutMult: 4000,
							globalMult: 1,
							lineMultiplier: 65,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 4000,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 18,
							multiplier: 40,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 40,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 800,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 19,
							multiplier: 8,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 8,
						},
					},
					{
						symbol: 'L1',
						kind: 4,
						win: 8000,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 2,
							},
							{
								reel: 3,
								row: 4,
							},
						],
						meta: {
							lineIndex: 20,
							multiplier: 80,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 80,
						},
					},
				],
			},
			{
				index: 9,
				type: 'wincap',
				amount: 500000,
			},
			{
				index: 10,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 11,
				type: 'updateFreeSpin',
				amount: 2,
				total: 12,
			},
			{
				index: 12,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H4',
						},
						{
							name: 'L2',
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L5',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
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
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 50,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
					],
				],
				paddingPositions: [23, 66, 47, 32, 89],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 13,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 14,
				type: 'updateFreeSpin',
				amount: 3,
				total: 12,
			},
			{
				index: 15,
				type: 'reveal',
				board: [
					[
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 5,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 5,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H3',
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
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 50,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 50,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
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
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
				],
				paddingPositions: [92, 10, 12, 45, 38],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 16,
				type: 'winInfo',
				totalWin: 1550,
				wins: [
					{
						symbol: 'L4',
						kind: 4,
						win: 250,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 3,
							},
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 3,
							multiplier: 5,
							winWithoutMult: 50,
							globalMult: 1,
							lineMultiplier: 5,
						},
					},
					{
						symbol: 'L4',
						kind: 4,
						win: 500,
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
								row: 3,
							},
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 12,
							multiplier: 10,
							winWithoutMult: 50,
							globalMult: 1,
							lineMultiplier: 10,
						},
					},
					{
						symbol: 'H4',
						kind: 3,
						win: 800,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 2,
							},
						],
						meta: {
							lineIndex: 20,
							multiplier: 10,
							winWithoutMult: 80,
							globalMult: 1,
							lineMultiplier: 10,
						},
					},
				],
			},
			{
				index: 17,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 18,
				type: 'updateFreeSpin',
				amount: 4,
				total: 12,
			},
			{
				index: 19,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'L4',
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
							name: 'S',
							scatter: true,
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
					],
				],
				paddingPositions: [149, 47, 101, 87, 192],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 1, 2],
			},
			{
				index: 20,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 21,
				type: 'updateFreeSpin',
				amount: 5,
				total: 12,
			},
			{
				index: 22,
				type: 'reveal',
				board: [
					[
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 50,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 3,
						},
						{
							name: 'H1',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
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
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'S',
							scatter: true,
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [33, 99, 165, 112, 125],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 23,
				type: 'winInfo',
				totalWin: 560,
				wins: [
					{
						symbol: 'L5',
						kind: 3,
						win: 500,
						positions: [
							{
								reel: 0,
								row: 1,
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
							lineIndex: 7,
							multiplier: 50,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 50,
						},
					},
					{
						symbol: 'L5',
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
							multiplier: 3,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 3,
						},
					},
					{
						symbol: 'L4',
						kind: 3,
						win: 30,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 4,
							},
						],
						meta: {
							lineIndex: 16,
							multiplier: 3,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 3,
						},
					},
				],
			},
			{
				index: 24,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 25,
				type: 'updateFreeSpin',
				amount: 6,
				total: 12,
			},
			{
				index: 26,
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
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
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
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [56, 86, 29, 17, 79],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 27,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 28,
				type: 'updateFreeSpin',
				amount: 7,
				total: 12,
			},
			{
				index: 29,
				type: 'reveal',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'L5',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L5',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
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
				],
				paddingPositions: [54, 17, 17, 52, 74],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 30,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 31,
				type: 'updateFreeSpin',
				amount: 8,
				total: 12,
			},
			{
				index: 32,
				type: 'reveal',
				board: [
					[
						{
							name: 'L5',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 5,
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 2,
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
					],
				],
				paddingPositions: [28, 81, 47, 52, 68],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 33,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 34,
				type: 'updateFreeSpin',
				amount: 9,
				total: 12,
			},
			{
				index: 35,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
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
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L5',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L5',
						},
					],
				],
				paddingPositions: [23, 56, 29, 48, 84],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 36,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 37,
				type: 'updateFreeSpin',
				amount: 10,
				total: 12,
			},
			{
				index: 38,
				type: 'reveal',
				board: [
					[
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'L5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L5',
						},
						{
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L5',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H3',
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
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L5',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'L5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [0, 7, 12, 19, 27],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 39,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 40,
				type: 'updateFreeSpin',
				amount: 11,
				total: 12,
			},
			{
				index: 41,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 5,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 5,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 50,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 4,
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 10,
						},
						{
							name: 'W',
							wild: true,
							multiplier: 20,
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [31, 39, 85, 88, 50],
				gameType: 'freegame',
				anticipation: [0, 0, 0, 0, 0],
			},
			{
				index: 42,
				type: 'winInfo',
				totalWin: 325050,
				wins: [
					{
						symbol: 'H1',
						kind: 4,
						win: 37500,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 3,
							},
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 3,
							multiplier: 25,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 25,
						},
					},
					{
						symbol: 'H3',
						kind: 4,
						win: 32000,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 4,
							},
							{
								reel: 3,
								row: 4,
							},
						],
						meta: {
							lineIndex: 4,
							multiplier: 64,
							winWithoutMult: 500,
							globalMult: 1,
							lineMultiplier: 64,
						},
					},
					{
						symbol: 'L4',
						kind: 3,
						win: 100,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 5,
							multiplier: 10,
							winWithoutMult: 10,
							globalMult: 1,
							lineMultiplier: 10,
						},
					},
					{
						symbol: 'H1',
						kind: 4,
						win: 21000,
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
							multiplier: 14,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 14,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 900,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 8,
							multiplier: 9,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 9,
						},
					},
					{
						symbol: 'H3',
						kind: 3,
						win: 1500,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
								row: 3,
							},
						],
						meta: {
							lineIndex: 10,
							multiplier: 15,
							winWithoutMult: 100,
							globalMult: 1,
							lineMultiplier: 15,
						},
					},
					{
						symbol: 'H1',
						kind: 4,
						win: 28500,
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
								row: 3,
							},
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 12,
							multiplier: 19,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 19,
						},
					},
					{
						symbol: 'H1',
						kind: 4,
						win: 96000,
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
								row: 4,
							},
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 14,
							multiplier: 64,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 64,
						},
					},
					{
						symbol: 'H1',
						kind: 4,
						win: 105000,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 4,
							},
							{
								reel: 3,
								row: 3,
							},
						],
						meta: {
							lineIndex: 16,
							multiplier: 70,
							winWithoutMult: 1500,
							globalMult: 1,
							lineMultiplier: 70,
						},
					},
					{
						symbol: 'H1',
						kind: 3,
						win: 1000,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 3,
							},
							{
								reel: 2,
								row: 2,
							},
						],
						meta: {
							lineIndex: 17,
							multiplier: 5,
							winWithoutMult: 200,
							globalMult: 1,
							lineMultiplier: 5,
						},
					},
					{
						symbol: 'L4',
						kind: 4,
						win: 950,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
							{
								reel: 3,
								row: 4,
							},
						],
						meta: {
							lineIndex: 18,
							multiplier: 19,
							winWithoutMult: 50,
							globalMult: 1,
							lineMultiplier: 19,
						},
					},
					{
						symbol: 'L3',
						kind: 4,
						win: 600,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 2,
								row: 3,
							},
							{
								reel: 3,
								row: 1,
							},
						],
						meta: {
							lineIndex: 19,
							multiplier: 10,
							winWithoutMult: 60,
							globalMult: 1,
							lineMultiplier: 10,
						},
					},
				],
			},
			{
				index: 43,
				type: 'setTotalWin',
				amount: 500000,
			},
			{
				index: 44,
				type: 'freeSpinEnd',
				amount: 500000,
				winLevel: 10,
			},
			{
				index: 45,
				type: 'finalWin',
				amount: 500000,
			},
		],
		criteria: 'wincap',
		baseGameWins: 0.0,
		freeGameWins: 5000,
	},
];
