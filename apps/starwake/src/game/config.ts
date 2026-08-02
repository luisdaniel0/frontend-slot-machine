// GENERATED FILE -- do not edit by hand.
// Source: math-sdk games/starwake/library/configs/config_fe_starwake.json
// Regenerate: node scripts/sync-math-config.mjs
// Board, bet modes, paylines, paytable and padding reels all live in the math
// config; editing them here would desync the frontend from the books it plays.
export default {
	"providerName": "Uptown Games",
	"gameName": "Starwake",
	"gameID": "starwake",
	"rtp": 0.9665,
	"numReels": 5,
	"numRows": [
		4,
		4,
		4,
		4,
		4
	],
	"betModes": {
		"base": {
			"cost": 1,
			"feature": true,
			"buyBonus": false,
			"rtp": 0.9665,
			"max_win": 25000
		},
		"ante_starfall": {
			"cost": 1.5,
			"feature": true,
			"buyBonus": false,
			"rtp": 0.9665,
			"max_win": 25000
		},
		"buy_corvus": {
			"cost": 240,
			"feature": false,
			"buyBonus": true,
			"rtp": 0.9665,
			"max_win": 10000
		},
		"buy_ursa": {
			"cost": 268,
			"feature": false,
			"buyBonus": true,
			"rtp": 0.9665,
			"max_win": 25000
		},
		"buy_draco": {
			"cost": 520,
			"feature": false,
			"buyBonus": true,
			"rtp": 0.9665,
			"max_win": 25000
		},
		"buy_mystery": {
			"cost": 563,
			"feature": false,
			"buyBonus": true,
			"rtp": 0.9665,
			"max_win": 25000
		}
	},
	"paylines": {
		"1": [
			0,
			0,
			0,
			0,
			0
		],
		"2": [
			1,
			1,
			1,
			1,
			1
		],
		"3": [
			2,
			2,
			2,
			2,
			2
		],
		"4": [
			3,
			3,
			3,
			3,
			3
		],
		"5": [
			0,
			1,
			2,
			1,
			0
		],
		"6": [
			3,
			2,
			1,
			2,
			3
		],
		"7": [
			1,
			2,
			3,
			2,
			1
		],
		"8": [
			2,
			1,
			0,
			1,
			2
		],
		"9": [
			0,
			1,
			2,
			3,
			3
		],
		"10": [
			3,
			2,
			1,
			0,
			0
		],
		"11": [
			0,
			0,
			1,
			2,
			3
		],
		"12": [
			3,
			3,
			2,
			1,
			0
		],
		"13": [
			1,
			0,
			1,
			2,
			3
		],
		"14": [
			2,
			3,
			2,
			1,
			0
		],
		"15": [
			0,
			0,
			1,
			1,
			2
		],
		"16": [
			3,
			3,
			2,
			2,
			1
		],
		"17": [
			1,
			1,
			0,
			1,
			1
		],
		"18": [
			2,
			2,
			3,
			2,
			2
		],
		"19": [
			1,
			2,
			1,
			0,
			0
		],
		"20": [
			2,
			1,
			2,
			3,
			3
		]
	},
	"symbols": {
		"H1": {
			"paytable": [
				{
					"5": 12
				},
				{
					"4": 6
				},
				{
					"3": 3
				}
			]
		},
		"H2": {
			"paytable": [
				{
					"5": 6
				},
				{
					"4": 4
				},
				{
					"3": 2
				}
			]
		},
		"H3": {
			"paytable": [
				{
					"5": 4
				},
				{
					"4": 2.5
				},
				{
					"3": 1.5
				}
			]
		},
		"H4": {
			"paytable": [
				{
					"5": 3
				},
				{
					"4": 2
				},
				{
					"3": 1
				}
			]
		},
		"L1": {
			"paytable": [
				{
					"5": 1.2
				},
				{
					"4": 0.75
				},
				{
					"3": 0.5
				}
			]
		},
		"L2": {
			"paytable": [
				{
					"5": 1
				},
				{
					"4": 0.6
				},
				{
					"3": 0.4
				}
			]
		},
		"L3": {
			"paytable": [
				{
					"5": 0.75
				},
				{
					"4": 0.5
				},
				{
					"3": 0.3
				}
			]
		},
		"L4": {
			"paytable": [
				{
					"5": 0.6
				},
				{
					"4": 0.4
				},
				{
					"3": 0.2
				}
			]
		},
		"L5": {
			"paytable": [
				{
					"5": 0.5
				},
				{
					"4": 0.3
				},
				{
					"3": 0.2
				}
			]
		},
		"S": {
			"paytable": null,
			"special_properties": [
				"scatter"
			]
		},
		"W": {
			"paytable": [
				{
					"5": 15
				}
			],
			"special_properties": [
				"wild",
				"multiplier"
			]
		}
	},
	"paddingReels": {
		"basegame": [
			[
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "S"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "S"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
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
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "W"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "S"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
				{
					"name": "W"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "S"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "S"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				}
			],
			[
				{
					"name": "L4"
				},
				{
					"name": "S"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "S"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "S"
				},
				{
					"name": "H3"
				},
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
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "W"
				},
				{
					"name": "L2"
				},
				{
					"name": "S"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "W"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "S"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "H2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				}
			],
			[
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
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
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "S"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
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
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "S"
				},
				{
					"name": "W"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "W"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "S"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "S"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "S"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				}
			],
			[
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "S"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "S"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "S"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
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
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "W"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "H1"
				},
				{
					"name": "H2"
				},
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
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "S"
				},
				{
					"name": "W"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "S"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
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
					"name": "S"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
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
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "S"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
				{
					"name": "W"
				},
				{
					"name": "S"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
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
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
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
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
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
					"name": "H2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
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
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "S"
				},
				{
					"name": "W"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "S"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				}
			]
		],
		"freegame": [
			[
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "W"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
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
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "W"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "W"
				},
				{
					"name": "H3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "W"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "H1"
				},
				{
					"name": "H2"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
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
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
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
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				}
			],
			[
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "W"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
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
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "H2"
				},
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
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "W"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "W"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "W"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
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
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "H4"
				}
			],
			[
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
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
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
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
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "W"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "W"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
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
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
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
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "W"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "W"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H4"
				},
				{
					"name": "H3"
				}
			],
			[
				{
					"name": "H3"
				},
				{
					"name": "L3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
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
					"name": "L5"
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
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
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
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "W"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "W"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "W"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "H2"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H1"
				},
				{
					"name": "H2"
				}
			],
			[
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H1"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
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
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "H1"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "H4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L2"
				},
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
					"name": "L2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "H1"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "L1"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "H3"
				},
				{
					"name": "L3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "H2"
				},
				{
					"name": "L4"
				},
				{
					"name": "L5"
				},
				{
					"name": "H4"
				},
				{
					"name": "H2"
				},
				{
					"name": "L5"
				},
				{
					"name": "L5"
				},
				{
					"name": "H1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L3"
				},
				{
					"name": "L5"
				},
				{
					"name": "L4"
				},
				{
					"name": "L4"
				},
				{
					"name": "L3"
				},
				{
					"name": "H2"
				},
				{
					"name": "H2"
				},
				{
					"name": "L1"
				},
				{
					"name": "L5"
				},
				{
					"name": "L2"
				},
				{
					"name": "L5"
				},
				{
					"name": "H3"
				},
				{
					"name": "H4"
				},
				{
					"name": "L4"
				},
				{
					"name": "H4"
				},
				{
					"name": "L1"
				},
				{
					"name": "L3"
				},
				{
					"name": "L2"
				}
			]
		]
	}
};
