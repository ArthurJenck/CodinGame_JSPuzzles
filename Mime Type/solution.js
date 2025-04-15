/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()) // Number of elements which make up the association table.
const Q = parseInt(readline()) // Number Q of file names to be analyzed.

const typeTable = []
for (let i = 0; i < N; i++) {
	var inputs = readline().split(' ')
	const EXT = inputs[0].toLowerCase()
	const MT = inputs[1]
	typeTable.push(EXT, MT)
}

for (let i = 0; i < Q; i++) {
	const FNAME = readline() // One file name per line.
	const fileNameArray = FNAME.split('.')
	const fileExtension =
		fileNameArray.length > 1
			? fileNameArray[fileNameArray.length - 1].toLowerCase()
			: ''

	if (typeTable.includes(fileExtension)) {
		const extensionIndex = typeTable.indexOf(fileExtension)
		console.log(typeTable[extensionIndex + 1])
	} else {
		console.log('UNKNOWN')
	}
}
