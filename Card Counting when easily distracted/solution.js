/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const streamOfConsciousness = readline()
const bustThreshold = parseInt(readline())

console.error('bustThreshold :', bustThreshold)
const suites = streamOfConsciousness.split('.')

const deck = [
	'A',
	'A',
	'A',
	'A',
	'2',
	'2',
	'2',
	'2',
	'3',
	'3',
	'3',
	'3',
	'4',
	'4',
	'4',
	'4',
	'5',
	'5',
	'5',
	'5',
	'6',
	'6',
	'6',
	'6',
	'7',
	'7',
	'7',
	'7',
	'8',
	'8',
	'8',
	'8',
	'9',
	'9',
	'9',
	'9',
	'T',
	'T',
	'T',
	'T',
	'J',
	'J',
	'J',
	'J',
	'Q',
	'Q',
	'Q',
	'Q',
	'K',
	'K',
	'K',
	'K',
]

const isValidSuite = (suite) => {
	return Array.from(suite).every((card) => deck.includes(card))
}

suites.forEach((suite) => {
	if (isValidSuite(suite)) {
		Array.from(suite).forEach((card) => {
			deck.splice(deck.indexOf(card), 1)
		})
	}
})
let valuesUnderThreshold = 0
deck.forEach((value) => {
	switch (value) {
		case 'A':
			valuesUnderThreshold++
			break
		case 'T':
		case 'J':
		case 'Q':
		case 'K':
			if (bustThreshold > 10) {
				valuesUnderThreshold++
			}
			break
		default:
			if (bustThreshold > value) {
				valuesUnderThreshold++
			}
			break
	}
})

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(Math.round((valuesUnderThreshold * 100) / deck.length) + '%')
