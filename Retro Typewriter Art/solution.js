const T = readline()

const peculiarCases = {
	sp: ' ',
	bS: '\\',
	sQ: "'",
}

T.split('nl ').forEach((line) => {
	const lineArt = []
	line.split(' ').forEach((char) => {
		if (
			char.includes('sp') ||
			char.includes('bS') ||
			char.includes('sQ') ||
			char.includes('nl')
		) {
			for (let i = 0; i < char.slice(0, -2); i++) {
				lineArt.push(peculiarCases[char.slice(-2)])
			}
		} else {
			for (let i = 0; i < char.slice(0, -1); i++) {
				lineArt.push(char.slice(-1))
			}
		}
	})
	console.log(lineArt.join(''))
})
