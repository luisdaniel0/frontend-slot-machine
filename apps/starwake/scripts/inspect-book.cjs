/** Inspect one exported book: node inspect_book.cjs <mode> <index> */
const fs = require('fs');
const mode = process.argv[2] || 'buy_draco';
const idx = Number(process.argv[3] ?? 65);

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
const b = books[idx];
if (!b) {
	console.error('no book at index ' + idx + ' (have ' + books.length + ')');
	process.exit(1);
}

console.log('mode              : ' + mode);
console.log('index             : ' + idx);
console.log('book id           : ' + b.id);
console.log('payoutMultiplier  : ' + b.payoutMultiplier + '   (stored x100)');
console.log('=> total win       : ' + (b.payoutMultiplier / 100).toFixed(2) + 'x bet');
console.log('=> on a $1.00 bet  : $' + (b.payoutMultiplier / 100).toFixed(2));

const counts = {};
for (const e of b.events) counts[e.type] = (counts[e.type] || 0) + 1;
console.log('\nevent counts      : ' + JSON.stringify(counts));

const setWins = b.events.filter((e) => e.type === 'setWin');
const totals = b.events.filter((e) => e.type === 'setTotalWin');
const fin = b.events.find((e) => e.type === 'finalWin');
console.log('\nrunning totals the counter should walk through:');
console.log('  setTotalWin : ' + totals.map((e) => (e.amount / 100).toFixed(2)).join(' > '));
console.log('  finalWin    : ' + (fin ? (fin.amount / 100).toFixed(2) : 'none'));
console.log('  last setWin : ' + (setWins.length ? (setWins[setWins.length - 1].amount / 100).toFixed(2) : 'none'));

const dealt = b.events.find((e) => e.type === 'constellationDealt');
if (dealt) console.log('\nfeature: ' + dealt.tier + ', ' + dealt.totalCells + ' cells');
const wake = b.events.find((e) => e.type === 'beastWake');
console.log('beast woke: ' + (wake ? 'YES' : 'no'));
