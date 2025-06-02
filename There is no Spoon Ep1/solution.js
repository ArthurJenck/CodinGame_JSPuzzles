const width = parseInt(readline())
const height = parseInt(readline())
const table = []

for (let i = 0; i < height; i++) {
	const line = Array.from(readline())
	table.push(line)
}

for (let i = 0; i < height; i++) {
	for (let j = 0; j < width; j++) {
		let rightNode = '-1 -1'
		let bottomNode = '-1 -1'
		if (table[i][j] === '0') {
			for (let k = j + 1; k < width && rightNode === '-1 -1'; k++) {
				if (table[i][k] === '0') {
					rightNode = `${k} ${i}`
				}
			}
			for (let l = i + 1; l < height && bottomNode === '-1 -1'; l++) {
				if (table[l][j] === '0') {
					bottomNode = `${j} ${l}`
				}
			}
			console.log(j, i, rightNode, bottomNode)
		}
	}
}
