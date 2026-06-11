export default {
	providerName: 'sample_provider',
	gameName: 'worldcup',
	gameID: '0_0_worldcup',
	rtp: 0.97,
	numReels: 5,
	numRows: [4, 4, 4, 4, 4],
	betModes: {
		base: {
			cost: 1.0,
			feature: true,
			buyBonus: false,
			rtp: 0.97,
			max_win: 5000,
		},
		bonus: {
			cost: 100.0,
			feature: false,
			buyBonus: true,
			rtp: 0.97,
			max_win: 5000,
		},
	},
	paylines: {
		'1': [0, 0, 0, 0, 0],
		'2': [1, 1, 1, 1, 1],
		'3': [2, 2, 2, 2, 2],
		'4': [3, 3, 3, 3, 3],
		'5': [0, 1, 2, 1, 0],
		'6': [3, 2, 1, 2, 3],
		'7': [0, 0, 1, 2, 2],
		'8': [3, 3, 2, 1, 1],
		'9': [1, 0, 1, 2, 1],
		'10': [2, 3, 2, 1, 2],
		'11': [0, 1, 1, 1, 2],
		'12': [3, 2, 2, 2, 1],
		'13': [0, 1, 0, 1, 2],
		'14': [3, 2, 3, 2, 1],
		'15': [1, 1, 0, 1, 1],
		'16': [2, 2, 3, 2, 2],
		'17': [0, 2, 1, 0, 2],
		'18': [3, 1, 2, 3, 1],
		'19': [0, 0, 2, 0, 0],
		'20': [3, 3, 1, 3, 3],
	},
	symbols: {
		W: {
			paytable: [
				{
					'5': 100,
				},
			],
			special_properties: ['wild', 'multiplier'],
		},
		H3: {
			paytable: [
				{
					'5': 25,
				},
				{
					'4': 5,
				},
				{
					'3': 1,
				},
			],
		},
		L2: {
			paytable: [
				{
					'5': 3,
				},
				{
					'4': 0.8,
				},
				{
					'3': 0.2,
				},
			],
		},
		H1: {
			paytable: [
				{
					'5': 100,
				},
				{
					'4': 15,
				},
				{
					'3': 2,
				},
			],
		},
		H2: {
			paytable: [
				{
					'5': 40,
				},
				{
					'4': 8,
				},
				{
					'3': 1.5,
				},
			],
		},
		L4: {
			paytable: [
				{
					'5': 2,
				},
				{
					'4': 0.5,
				},
				{
					'3': 0.1,
				},
			],
		},
		L1: {
			paytable: [
				{
					'5': 4,
				},
				{
					'4': 1,
				},
				{
					'3': 0.3,
				},
			],
		},
		L5: {
			paytable: [
				{
					'5': 1.5,
				},
				{
					'4': 0.4,
				},
				{
					'3': 0.1,
				},
			],
		},
		L3: {
			paytable: [
				{
					'5': 2.5,
				},
				{
					'4': 0.6,
				},
				{
					'3': 0.2,
				},
			],
		},
		S: {
			special_properties: ['scatter'],
		},
		H4: {
			paytable: [
				{
					'5': 15,
				},
				{
					'4': 3,
				},
				{
					'3': 0.8,
				},
			],
		},
	},
	paddingReels: {
		basegame: [
			[
				{
					name: 'L1',
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
					name: 'L5',
				},
				{
					name: 'L4',
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
					name: 'S',
				},
				{
					name: 'L5',
				},
				{
					name: 'L3',
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
					name: 'L5',
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
				{
					name: 'H1',
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
					name: 'H2',
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
				{
					name: 'H4',
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
					name: 'L4',
				},
				{
					name: 'H3',
				},
				{
					name: 'L5',
				},
				{
					name: 'S',
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
				{
					name: 'H4',
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
					name: 'L3',
				},
				{
					name: 'L2',
				},
				{
					name: 'L2',
				},
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'W',
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
					name: 'L4',
				},
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
					name: 'H4',
				},
				{
					name: 'L2',
				},
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
					name: 'H3',
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
					name: 'H4',
				},
				{
					name: 'S',
				},
				{
					name: 'L5',
				},
				{
					name: 'L4',
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
					name: 'H2',
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
					name: 'H3',
				},
				{
					name: 'H3',
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
				{
					name: 'L4',
				},
				{
					name: 'H4',
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
				{
					name: 'L5',
				},
				{
					name: 'H3',
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
					name: 'L1',
				},
				{
					name: 'H2',
				},
				{
					name: 'H4',
				},
				{
					name: 'L3',
				},
				{
					name: 'L5',
				},
				{
					name: 'H4',
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
					name: 'L3',
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
					name: 'H3',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
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
					name: 'H3',
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
					name: 'L2',
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
				{
					name: 'L2',
				},
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
					name: 'L1',
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
					name: 'L4',
				},
				{
					name: 'L2',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
				{
					name: 'L5',
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
					name: 'L3',
				},
				{
					name: 'L4',
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
					name: 'H3',
				},
				{
					name: 'L4',
				},
				{
					name: 'W',
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
					name: 'L4',
				},
				{
					name: 'L1',
				},
				{
					name: 'H2',
				},
				{
					name: 'S',
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
					name: 'L2',
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
				{
					name: 'L5',
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
					name: 'L2',
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
				{
					name: 'H2',
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
					name: 'L4',
				},
				{
					name: 'L2',
				},
				{
					name: 'H4',
				},
				{
					name: 'L1',
				},
				{
					name: 'H2',
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
					name: 'H3',
				},
				{
					name: 'L5',
				},
				{
					name: 'H2',
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
				{
					name: 'L3',
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
					name: 'L4',
				},
				{
					name: 'H2',
				},
				{
					name: 'L5',
				},
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
					name: 'L2',
				},
				{
					name: 'L1',
				},
				{
					name: 'L2',
				},
				{
					name: 'S',
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
					name: 'L3',
				},
				{
					name: 'L4',
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
					name: 'L2',
				},
				{
					name: 'H4',
				},
				{
					name: 'S',
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
					name: 'L2',
				},
				{
					name: 'L1',
				},
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
					name: 'L5',
				},
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
					name: 'H2',
				},
				{
					name: 'L4',
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
					name: 'L3',
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
					name: 'L3',
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
				{
					name: 'L3',
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
				{
					name: 'H1',
				},
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'L3',
				},
				{
					name: 'H4',
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
					name: 'L4',
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
					name: 'L5',
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
					name: 'H2',
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
					name: 'H4',
				},
				{
					name: 'L3',
				},
				{
					name: 'H2',
				},
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
				{
					name: 'H2',
				},
				{
					name: 'L5',
				},
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
					name: 'H2',
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
					name: 'L4',
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
					name: 'H4',
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
					name: 'L2',
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
				{
					name: 'H2',
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
					name: 'H1',
				},
				{
					name: 'L4',
				},
				{
					name: 'L3',
				},
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
					name: 'L1',
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
					name: 'H2',
				},
				{
					name: 'H4',
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
					name: 'H3',
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
					name: 'H3',
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
					name: 'H1',
				},
				{
					name: 'W',
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
					name: 'L4',
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
					name: 'H4',
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
					name: 'H1',
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
					name: 'L5',
				},
				{
					name: 'L4',
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
					name: 'L5',
				},
				{
					name: 'L1',
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
					name: 'H4',
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
					name: 'H1',
				},
				{
					name: 'L5',
				},
				{
					name: 'H4',
				},
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
					name: 'H4',
				},
				{
					name: 'H4',
				},
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
					name: 'L3',
				},
				{
					name: 'W',
				},
				{
					name: 'L1',
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
					name: 'H4',
				},
				{
					name: 'L4',
				},
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
					name: 'L3',
				},
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
					name: 'L4',
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
					name: 'H1',
				},
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
					name: 'H3',
				},
				{
					name: 'L4',
				},
				{
					name: 'L3',
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
					name: 'L4',
				},
				{
					name: 'L5',
				},
				{
					name: 'H2',
				},
				{
					name: 'L2',
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
				{
					name: 'S',
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
					name: 'H4',
				},
				{
					name: 'L1',
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
					name: 'L4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
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
					name: 'H2',
				},
				{
					name: 'L1',
				},
				{
					name: 'H1',
				},
				{
					name: 'H4',
				},
				{
					name: 'L1',
				},
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
					name: 'S',
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
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'H1',
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
					name: 'L5',
				},
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
					name: 'L2',
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
					name: 'H3',
				},
				{
					name: 'H4',
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
					name: 'H2',
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
					name: 'H2',
				},
				{
					name: 'L5',
				},
				{
					name: 'L4',
				},
				{
					name: 'S',
				},
				{
					name: 'L1',
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
				{
					name: 'L5',
				},
				{
					name: 'L1',
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
					name: 'L4',
				},
				{
					name: 'L3',
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
				{
					name: 'L3',
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
				{
					name: 'H1',
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
					name: 'L3',
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
				{
					name: 'L5',
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
					name: 'L4',
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
					name: 'L1',
				},
				{
					name: 'L3',
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
				{
					name: 'L5',
				},
				{
					name: 'H1',
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
					name: 'H1',
				},
				{
					name: 'L1',
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
					name: 'L4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H2',
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
					name: 'L2',
				},
				{
					name: 'L1',
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
					name: 'W',
				},
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
					name: 'H3',
				},
				{
					name: 'L3',
				},
				{
					name: 'H4',
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
					name: 'L3',
				},
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
				{
					name: 'S',
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
				{
					name: 'H2',
				},
				{
					name: 'H2',
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
					name: 'L3',
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
					name: 'L2',
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
					name: 'L3',
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
					name: 'L1',
				},
				{
					name: 'L4',
				},
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
				{
					name: 'L2',
				},
				{
					name: 'W',
				},
				{
					name: 'H4',
				},
				{
					name: 'L2',
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
					name: 'L5',
				},
				{
					name: 'H1',
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
					name: 'L4',
				},
				{
					name: 'H2',
				},
				{
					name: 'S',
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
					name: 'L3',
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
					name: 'L1',
				},
				{
					name: 'L2',
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
					name: 'L4',
				},
				{
					name: 'H2',
				},
				{
					name: 'S',
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
				{
					name: 'L5',
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
					name: 'L5',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
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
					name: 'W',
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
					name: 'L4',
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
				{
					name: 'L1',
				},
				{
					name: 'L4',
				},
				{
					name: 'L3',
				},
				{
					name: 'H2',
				},
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
					name: 'L4',
				},
				{
					name: 'H3',
				},
				{
					name: 'H1',
				},
				{
					name: 'L2',
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
					name: 'H4',
				},
				{
					name: 'L4',
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
					name: 'H2',
				},
				{
					name: 'L5',
				},
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
					name: 'H3',
				},
				{
					name: 'L2',
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
					name: 'L5',
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
					name: 'H3',
				},
				{
					name: 'H4',
				},
				{
					name: 'H2',
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
					name: 'L1',
				},
				{
					name: 'H3',
				},
				{
					name: 'H3',
				},
				{
					name: 'L3',
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
					name: 'L1',
				},
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
					name: 'H4',
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
					name: 'L2',
				},
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
					name: 'L1',
				},
				{
					name: 'L5',
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
				{
					name: 'L3',
				},
				{
					name: 'L2',
				},
				{
					name: 'L5',
				},
				{
					name: 'H2',
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
					name: 'L3',
				},
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
					name: 'L2',
				},
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
					name: 'L3',
				},
				{
					name: 'L2',
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
				{
					name: 'H3',
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
					name: 'L2',
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
					name: 'L4',
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
					name: 'H3',
				},
				{
					name: 'L5',
				},
				{
					name: 'L5',
				},
				{
					name: 'H4',
				},
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
					name: 'W',
				},
				{
					name: 'L3',
				},
				{
					name: 'L5',
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
					name: 'L1',
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
					name: 'L5',
				},
				{
					name: 'L1',
				},
				{
					name: 'L2',
				},
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
					name: 'L4',
				},
				{
					name: 'L3',
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
					name: 'L5',
				},
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
					name: 'L3',
				},
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
					name: 'L1',
				},
				{
					name: 'H4',
				},
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
					name: 'L1',
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
					name: 'H4',
				},
				{
					name: 'L2',
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
					name: 'H4',
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
			],
			[
				{
					name: 'L3',
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
					name: 'L1',
				},
				{
					name: 'S',
				},
				{
					name: 'H2',
				},
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
					name: 'H2',
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
					name: 'H4',
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
					name: 'H4',
				},
				{
					name: 'L1',
				},
				{
					name: 'L3',
				},
				{
					name: 'W',
				},
				{
					name: 'H4',
				},
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
					name: 'H4',
				},
				{
					name: 'L5',
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
					name: 'L4',
				},
				{
					name: 'L2',
				},
				{
					name: 'H1',
				},
				{
					name: 'S',
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
					name: 'L1',
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
				{
					name: 'L5',
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
					name: 'L4',
				},
				{
					name: 'H1',
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
					name: 'H3',
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
					name: 'L3',
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
					name: 'L5',
				},
				{
					name: 'L4',
				},
				{
					name: 'S',
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
				{
					name: 'L2',
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
					name: 'L4',
				},
				{
					name: 'L5',
				},
				{
					name: 'L4',
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
					name: 'H3',
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
					name: 'L4',
				},
				{
					name: 'H4',
				},
				{
					name: 'L4',
				},
				{
					name: 'L3',
				},
				{
					name: 'H4',
				},
				{
					name: 'L3',
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
				{
					name: 'L5',
				},
				{
					name: 'H4',
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
					name: 'L1',
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
					name: 'H4',
				},
				{
					name: 'H1',
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
				{
					name: 'H3',
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
					name: 'L1',
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
					name: 'H3',
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
					name: 'H3',
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
				{
					name: 'L5',
				},
				{
					name: 'L5',
				},
				{
					name: 'H3',
				},
				{
					name: 'L3',
				},
				{
					name: 'W',
				},
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
					name: 'H1',
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
				{
					name: 'H4',
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
				{
					name: 'L5',
				},
				{
					name: 'L5',
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
					name: 'H4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H3',
				},
				{
					name: 'S',
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
					name: 'H2',
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
					name: 'H3',
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
					name: 'L4',
				},
				{
					name: 'L2',
				},
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
					name: 'H3',
				},
				{
					name: 'L3',
				},
				{
					name: 'L1',
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
					name: 'L1',
				},
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
					name: 'L5',
				},
				{
					name: 'H4',
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
					name: 'L5',
				},
				{
					name: 'H3',
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
					name: 'H4',
				},
				{
					name: 'H2',
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
					name: 'L4',
				},
				{
					name: 'H2',
				},
				{
					name: 'S',
				},
				{
					name: 'L1',
				},
				{
					name: 'L3',
				},
				{
					name: 'L3',
				},
				{
					name: 'L4',
				},
			],
		],
		freegame: [
			[
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
				{
					name: 'H2',
				},
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
				{
					name: 'L3',
				},
				{
					name: 'L2',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'H2',
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
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'H1',
				},
				{
					name: 'L5',
				},
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
				{
					name: 'L5',
				},
				{
					name: 'H3',
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
					name: 'L1',
				},
				{
					name: 'L4',
				},
				{
					name: 'L3',
				},
				{
					name: 'L1',
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
				{
					name: 'L1',
				},
				{
					name: 'L5',
				},
				{
					name: 'L5',
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
					name: 'H2',
				},
				{
					name: 'L3',
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
					name: 'L3',
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
				{
					name: 'H1',
				},
				{
					name: 'H2',
				},
				{
					name: 'S',
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
					name: 'H2',
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
					name: 'H2',
				},
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
				{
					name: 'H1',
				},
				{
					name: 'L2',
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
				},
				{
					name: 'L2',
				},
				{
					name: 'L1',
				},
				{
					name: 'L5',
				},
				{
					name: 'W',
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
					name: 'L3',
				},
				{
					name: 'L4',
				},
				{
					name: 'H4',
				},
				{
					name: 'L2',
				},
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
				{
					name: 'H2',
				},
				{
					name: 'L5',
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
					name: 'L4',
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
				{
					name: 'L4',
				},
				{
					name: 'H4',
				},
				{
					name: 'W',
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
				{
					name: 'L4',
				},
				{
					name: 'L3',
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
					name: 'L5',
				},
				{
					name: 'H1',
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
					name: 'W',
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
					name: 'H1',
				},
				{
					name: 'H4',
				},
				{
					name: 'L5',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
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
					name: 'H3',
				},
				{
					name: 'S',
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
				{
					name: 'H1',
				},
				{
					name: 'H4',
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
					name: 'L5',
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
				{
					name: 'L2',
				},
				{
					name: 'H3',
				},
				{
					name: 'L5',
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
				{
					name: 'L5',
				},
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
				{
					name: 'H4',
				},
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
					name: 'H2',
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
				{
					name: 'H4',
				},
				{
					name: 'S',
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
					name: 'L4',
				},
				{
					name: 'W',
				},
				{
					name: 'H4',
				},
				{
					name: 'H1',
				},
				{
					name: 'S',
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
					name: 'H4',
				},
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
				{
					name: 'H3',
				},
				{
					name: 'H1',
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
				{
					name: 'H4',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'W',
				},
				{
					name: 'H2',
				},
				{
					name: 'H4',
				},
				{
					name: 'W',
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
				{
					name: 'H1',
				},
				{
					name: 'L5',
				},
				{
					name: 'H4',
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
				{
					name: 'W',
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
					name: 'L4',
				},
				{
					name: 'L3',
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
				{
					name: 'W',
				},
				{
					name: 'L5',
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
					name: 'H4',
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
					name: 'L4',
				},
				{
					name: 'L3',
				},
				{
					name: 'H1',
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
					name: 'W',
				},
				{
					name: 'L1',
				},
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
				{
					name: 'H2',
				},
				{
					name: 'H1',
				},
				{
					name: 'W',
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
					name: 'H2',
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
					name: 'L3',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
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
					name: 'L2',
				},
				{
					name: 'L5',
				},
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
					name: 'L2',
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
				{
					name: 'H3',
				},
				{
					name: 'H1',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
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
				{
					name: 'L2',
				},
				{
					name: 'L1',
				},
				{
					name: 'S',
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
				{
					name: 'L4',
				},
				{
					name: 'S',
				},
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
				{
					name: 'L2',
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
					name: 'L5',
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
				{
					name: 'H3',
				},
				{
					name: 'L4',
				},
				{
					name: 'W',
				},
				{
					name: 'H4',
				},
				{
					name: 'W',
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
					name: 'H4',
				},
				{
					name: 'L5',
				},
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
					name: 'L2',
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
				{
					name: 'H4',
				},
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
					name: 'L5',
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
					name: 'H2',
				},
				{
					name: 'L1',
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
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'W',
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
					name: 'L1',
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
					name: 'H3',
				},
				{
					name: 'L4',
				},
				{
					name: 'H1',
				},
				{
					name: 'H2',
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
					name: 'L1',
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
					name: 'L3',
				},
				{
					name: 'L2',
				},
				{
					name: 'W',
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
					name: 'L4',
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
				{
					name: 'H2',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
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
					name: 'L4',
				},
				{
					name: 'W',
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
				},
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
				{
					name: 'H1',
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
				{
					name: 'L3',
				},
				{
					name: 'W',
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
					name: 'H3',
				},
				{
					name: 'L5',
				},
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
					name: 'H2',
				},
				{
					name: 'H1',
				},
				{
					name: 'S',
				},
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
					name: 'H1',
				},
				{
					name: 'L4',
				},
				{
					name: 'L5',
				},
				{
					name: 'W',
				},
				{
					name: 'H4',
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
					name: 'H1',
				},
				{
					name: 'H2',
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
					name: 'H2',
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
					name: 'H4',
				},
				{
					name: 'L2',
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
					name: 'L1',
				},
				{
					name: 'W',
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
					name: 'H4',
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
					name: 'S',
				},
				{
					name: 'H2',
				},
				{
					name: 'H4',
				},
				{
					name: 'H1',
				},
				{
					name: 'W',
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
				{
					name: 'L1',
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
				{
					name: 'L1',
				},
				{
					name: 'H1',
				},
				{
					name: 'H4',
				},
				{
					name: 'W',
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
				{
					name: 'H1',
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
				{
					name: 'H2',
				},
				{
					name: 'W',
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
				{
					name: 'H1',
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
				{
					name: 'L5',
				},
				{
					name: 'L3',
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
					name: 'H4',
				},
				{
					name: 'H1',
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
					name: 'W',
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
					name: 'H1',
				},
				{
					name: 'H3',
				},
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
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
				{
					name: 'H3',
				},
				{
					name: 'W',
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
				{
					name: 'S',
				},
				{
					name: 'L5',
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
					name: 'L4',
				},
				{
					name: 'L3',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
				},
				{
					name: 'W',
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
					name: 'H3',
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
					name: 'L1',
				},
				{
					name: 'H3',
				},
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
				},
				{
					name: 'H2',
				},
				{
					name: 'L3',
				},
				{
					name: 'L1',
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
					name: 'L3',
				},
				{
					name: 'W',
				},
				{
					name: 'L1',
				},
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'H3',
				},
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
					name: 'L4',
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
					name: 'H3',
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
				{
					name: 'L2',
				},
				{
					name: 'H4',
				},
				{
					name: 'L4',
				},
			],
		],
	},
};
