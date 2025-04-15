/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()) // Number of elements which make up the association table.
const Q = parseInt(readline()) // Number Q of file names to be analyzed.

const typeTable = []
for (let i = 0; i < N; i++) {
	var inputs = readline().split(' ')
	const EXT = inputs[0] // file extension
	const MT = inputs[1] // MIME type.
	typeTable.push(EXT, MT)
}

for (let i = 0; i < Q; i++) {
	const FNAME = readline() // One file name per line.
	const fileNameArray = FNAME.split('.')
	const fileExtension =
		fileNameArray.length > 1 ? fileNameArray[fileNameArray.length - 1] : ''
	if (
		(fileExtension,
		typeTable.includes(fileExtension) ||
			typeTable.includes(fileExtension.toLocaleLowerCase()) ||
			typeTable.includes(fileExtension.toLocaleUpperCase()))
	) {
		const extensionIndex = typeTable.includes(fileExtension)
			? typeTable.indexOf(fileExtension)
			: typeTable.includes(fileExtension.toLocaleLowerCase())
			? typeTable.indexOf(fileExtension.toLocaleLowerCase())
			: typeTable.indexOf(fileExtension.toLocaleUpperCase())
		console.log(typeTable[extensionIndex + 1])
	} else {
		console.log('UNKNOWN')
	}
}
