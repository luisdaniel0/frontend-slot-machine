// Keybearer Design System palette, mirrored from the DS tokens/colors.css as
// Pixi-friendly hex numbers. Reference these (not raw literals) in Pixi
// components so the whole game stays on the twilight/antique-gold system.
// Source: "Keybearer Design System/tokens/colors.css" + effects.css.

export const COLORS = {
	// Night / base (deep indigo twilight)
	night950: 0x06061a,
	night900: 0x0a0a22,
	night850: 0x0e0f2e,
	night800: 0x13153b,
	night700: 0x1b1d52,
	night600: 0x262a6e,
	indigo400: 0x4b53b3,
	indigo300: 0x6f78d6,

	// Antique gold (frames, keys, master win)
	gold700: 0x8a5e22,
	gold600: 0xb07e2f,
	gold500: 0xd2a149,
	gold400: 0xe8c66a,
	gold300: 0xf4dd97,
	gold200: 0xfbedc1,
	gold100: 0xfff6de,

	// Heart magenta
	heart500: 0xe62a82,
	heart400: 0xff4d9b,
	heart300: 0xff86bd,

	// Aether cyan (celestial key-light / Super tier)
	aether500: 0x2fd0db,
	aether400: 0x5ce4ec,
	aether300: 0x9af3f7,

	// Arcane violet (Mega tier)
	arcane500: 0x7b3ff2,
	arcane400: 0x9d6bff,
	arcane300: 0xc4a3ff,

	// Neutral ink / parchment
	paper100: 0xeef0ff,
	paper300: 0xc3c7ee,

	// Surfaces
	surfaceReel: 0x0c0d28,
	reelTop: 0x11132f,
	reelBottom: 0x0a0b21,
} as const;

// Semantic aliases — match the DS --semantic tokens.
export const THEME = {
	bgBase: COLORS.night950,
	gradNightInner: COLORS.night700, // radial-gradient inner (top-center)
	gradNightMid: COLORS.night900,
	gradNightOuter: COLORS.night950,
	borderFrame: COLORS.gold600,
	borderFrameBright: COLORS.gold400,
	keyGlow: COLORS.aether400,
	// feature-tier accents (3=gold, 4=cyan, 5=violet)
	tierStandard: COLORS.gold400,
	tierSuper: COLORS.aether400,
	tierMega: COLORS.arcane400,
} as const;

// Faint multi-color starfield palette (DS: "tiny radial-gradient dots").
export const STAR_COLORS = [
	COLORS.paper100,
	COLORS.gold300,
	COLORS.aether300,
	COLORS.arcane300,
	COLORS.heart300,
] as const;
