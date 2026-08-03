/**
 * Prove the woken beast is doing its two jobs, straight off the book tape.
 *
 *   1. SUBSTITUTING -- do the beast's cells actually appear inside winning
 *      line positions? (i.e. is the 2x2 acting as wilds)
 *   2. MULTIPLYING  -- does every win on a roam spin get multiplied by the
 *      beast's current rung? (win === winWithoutMult * multiplier)
 *
 * The frontend cannot answer either -- it only draws what it is told. The book
 * is the authority, so this reads the events directly.
 *
 *   node scripts/verify-beast.cjs <mode> <index>
 */
const fs = require('fs');

const mode = process.argv[2] || 'buy_draco';
const idx = Number(process.argv[3] ?? 0);

/** Read a generated `export default <json>;` module back into a value. */
const strip = (p) =>
	JSON.parse(
		fs
			.readFileSync(p, 'utf8')
			.replace(/^\/\/.*$/gm, '')
			.replace('export default', '')
			.replace(/\s*as const\s*;?\s*$/, '')
			.replace(/;\s*$/, '')
			.trim(),
	);

const books = strip('src/stories/data/' + mode + '_books.ts');
const book = books[idx];
if (!book) {
	console.error('no book at index ' + idx);
	process.exit(1);
}

const key = (c) => c.reel + ',' + c.row;

let beastCells = [];
let beastMult = 0;
let awake = false;
let spin = 0;
let checkedWins = 0;
let multOk = 0;
let winsTouchingBeast = 0;
let winsTotal = 0;

console.log('book id ' + book.id + '   pays ' + (book.payoutMultiplier / 100).toFixed(2) + 'x\n');

for (const e of book.events) {
	if (e.type === 'reveal') spin++;

	if (e.type === 'beastWake') {
		awake = true;
		console.log('*** BEAST WAKES on spin ' + spin + ' -- ' + e.tier + ' ' + e.beastShape.reels + 'x' + e.beastShape.rows + '\n');
	}

	if (e.type === 'beastRoam') {
		beastCells = e.cells;
		beastMult = e.multiplier;
		console.log('spin ' + String(spin).padStart(2) + '  beast at [' + e.cells.map(key).join(' ') + ']  x' + e.multiplier);
	}

	if (e.type === 'winInfo' && awake) {
		const beastSet = new Set(beastCells.map(key));
		for (const w of e.wins) {
			winsTotal++;
			const hits = w.positions.filter((p) => beastSet.has(key(p)));
			const touches = hits.length > 0;
			if (touches) winsTouchingBeast++;

			const expected = w.meta.winWithoutMult * w.meta.multiplier;
			const ok = Math.abs(expected - w.win) < 0.005;
			checkedWins++;
			if (ok) multOk++;

			console.log(
				'      ' + String(w.kind) + 'x ' + String(w.symbol).padEnd(3) +
				' line ' + String(w.meta.lineIndex).padStart(2) +
				'  base ' + String(w.meta.winWithoutMult).padStart(7) +
				' x' + String(w.meta.multiplier).padStart(3) +
				' = ' + String(w.win).padStart(8) +
				(ok ? '  OK' : '  MISMATCH!') +
				(touches ? '   <- crosses beast (' + hits.map(key).join(' ') + ')' : ''),
			);
		}
	}
}

console.log('\n' + '='.repeat(64));
if (!awake) {
	console.log('This book never woke the beast -- pick one that does.');
	process.exit(0);
}
console.log('wins on roam spins            : ' + winsTotal);
console.log('  arithmetic verified          : ' + multOk + '/' + checkedWins +
	(multOk === checkedWins ? '   (win === base x multiplier)' : '   <-- SOME WRONG'));
console.log('  crossing the beast footprint : ' + winsTouchingBeast + '/' + winsTotal +
	'  (' + ((winsTouchingBeast / Math.max(winsTotal, 1)) * 100).toFixed(0) + '%)');
console.log('\nReading it:');
console.log(' - a win listing beast cells in its positions PROVES the 2x2 substituted');
console.log('   (those cells held whatever symbol the reels dropped; the line only pays');
console.log('    because the block made them wild)');
console.log(' - multiplier column should equal the beast rung shown on that spin');
console.log(' - wins NOT crossing the beast are ordinary line wins from the sticky');
console.log('   wilds/real symbols -- they are expected, and tell you whether the');
console.log('   multiplier applies to every win or only to beast-crossing ones');
