export default {
	"reveal": {
		"type": "reveal",
		"board": [
			[
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "H4"
				},
				{
					"name": "K",
					"scatter": true
				},
				{
					"name": "L1"
				}
			],
			[
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "K",
					"scatter": true
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				}
			],
			[
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				}
			],
			[
				{
					"name": "H1"
				},
				{
					"name": "H1"
				},
				{
					"name": "K",
					"scatter": true
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				}
			],
			[
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "K",
					"scatter": true
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				}
			]
		],
		"paddingPositions": [
			0,
			134,
			11,
			87,
			27
		],
		"gameType": "basegame",
		"anticipation": [
			0,
			0,
			1,
			2,
			3
		]
	},
	"setTotalWin": {
		"type": "setTotalWin",
		"amount": 0
	},
	"freeSpinTrigger": {
		"type": "freeSpinTrigger",
		"totalFs": 12,
		"positions": [
			{
				"reel": 0,
				"row": 4
			},
			{
				"reel": 1,
				"row": 3
			},
			{
				"reel": 3,
				"row": 2
			},
			{
				"reel": 4,
				"row": 2
			}
		]
	},
	"updateFreeSpin": {
		"type": "updateFreeSpin",
		"amount": 0,
		"total": 12
	},
	"updateGlobalMult": {
		"type": "updateGlobalMult",
		"globalMult": 4
	},
	"winInfo": {
		"type": "winInfo",
		"totalWin": 1120,
		"wins": [
			{
				"symbol": "L2",
				"kind": 4,
				"win": 800,
				"positions": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 3
					},
					{
						"reel": 3,
						"row": 2
					}
				],
				"meta": {
					"lineIndex": 5,
					"multiplier": 4,
					"winWithoutMult": 200,
					"globalMult": 4,
					"lineMultiplier": 1
				}
			},
			{
				"symbol": "L2",
				"kind": 3,
				"win": 320,
				"positions": [
					{
						"reel": 0,
						"row": 1
					},
					{
						"reel": 1,
						"row": 2
					},
					{
						"reel": 2,
						"row": 3
					}
				],
				"meta": {
					"lineIndex": 9,
					"multiplier": 4,
					"winWithoutMult": 80,
					"globalMult": 4,
					"lineMultiplier": 1
				}
			}
		]
	},
	"setWin": {
		"type": "setWin",
		"amount": 1120,
		"winLevel": 5
	},
	"freeSpinEnd": {
		"type": "freeSpinEnd",
		"amount": 48800,
		"winLevel": 7
	},
	"finalWin": {
		"type": "finalWin",
		"amount": 48800
	},
	"freeSpinRetrigger": {
		"type": "freeSpinRetrigger",
		"totalFs": 15,
		"positions": [
			{
				"reel": 0,
				"row": 1
			},
			{
				"reel": 1,
				"row": 4
			},
			{
				"reel": 2,
				"row": 2
			},
			{
				"reel": 2,
				"row": 4
			}
		]
	},
	"wincap": {
		"type": "wincap",
		"amount": 2500000
	}
};
