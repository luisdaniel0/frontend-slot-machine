/**
 * Regenerate src/game/config.ts from the math SDK's published frontend config.
 *
 * config_fe_<game>.json and config.ts hold the SAME data -- board size, bet modes,
 * paylines, paytable, padding reels -- so this file is generated, never hand-edited.
 * Re-run it after ANY math change that touches those (a re-sim, a paytable edit, a
 * new bet mode) or the frontend will silently render a stale game.
 *
 *   node scripts/sync-math-config.mjs [path/to/math-sdk]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const mathRoot = resolve(here, '../../../../math-sdk');
const root = process.argv[2] ? resolve(process.argv[2]) : mathRoot;
const src = resolve(root, 'games/starwake/library/configs/config_fe_starwake.json');
const out = resolve(here, '../src/game/config.ts');

if (!existsSync(src)) {
	console.error(`math config not found: ${src}`);
	console.error('pass the math-sdk path as an argument, or run generate_configs first.');
	process.exit(1);
}

const cfg = JSON.parse(readFileSync(src, 'utf8'));

// The math SDK emits `symbols` as a LIST of single-key objects
// ([{H4:{paytable}}, {H2:{...}}, ...]) but the frontend indexes it by symbol name
// ({H4:{paytable}, H2:{...}}). Flatten it, or every symbol lookup silently misses.
// (Same quirk is why config_fe_*.json is not byte-reproducible -- the symbols come
// out of an unordered collection, so their order changes between generate_configs
// runs with no math change. Sort them here so this generated file stays stable.)
if (Array.isArray(cfg.symbols)) {
	const flat = {};
	for (const entry of cfg.symbols) {
		for (const [name, body] of Object.entries(entry)) flat[name] = body;
	}
	cfg.symbols = Object.fromEntries(
		Object.keys(flat)
			.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
			.map((k) => [k, flat[k]]),
	);
}

const banner = `// GENERATED FILE -- do not edit by hand.
// Source: math-sdk games/starwake/library/configs/config_fe_starwake.json
// Regenerate: node scripts/sync-math-config.mjs
// Board, bet modes, paylines, paytable and padding reels all live in the math
// config; editing them here would desync the frontend from the books it plays.
`;

// NB: no `as const`. It makes paddingReels readonly, which then fails to satisfy
// the RawSymbol[][] parameter that enhancedBoard.spin() takes (TS2322).
writeFileSync(out, `${banner}export default ${JSON.stringify(cfg, null, '\t')};\n`);

const rows = cfg.numRows.join('x');
console.log(`wrote ${out}`);
console.log(`  ${cfg.gameName} by ${cfg.providerName}  (${cfg.gameID})`);
console.log(`  ${cfg.numReels} reels [${rows}]  rtp ${cfg.rtp}  ${Object.keys(cfg.paylines).length} paylines`);
console.log(`  bet modes: ${Object.keys(cfg.betModes).join(', ')}`);
console.log(`  symbols:   ${Object.keys(cfg.symbols).join(', ')}`);
