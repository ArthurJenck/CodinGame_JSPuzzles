var inputs = readline().split(' ')
const W = parseInt(inputs[0])
const H = parseInt(inputs[1])
const N = parseInt(readline())

const box = []
for (let i = 0; i < H; i++) {
	box.push(['|', ...Array(W).fill(' '), '|'])
}
box.push(['+', ...Array(W).fill('-'), '+'])

const fall = (sandY, sandX, sandChar) => {
	const isFree = (y, x) => {
		return box[y][x] === ' '
	}

	if (isFree(sandY + 1, sandX)) {
		fall(sandY + 1, sandX, sandChar)
	} else if (box[sandY + 1][sandX] === '-') {
		box[sandY][sandX] = sandChar
		return
	} else {
		if (sandChar === sandChar.toLocaleUpperCase()) {
			if (isFree(sandY + 1, sandX - 1)) {
				fall(sandY + 1, sandX - 1, sandChar)
			} else if (isFree(sandY + 1, sandX + 1)) {
				fall(sandY + 1, sandX + 1, sandChar)
			} else {
				box[sandY][sandX] = sandChar
				return
			}
		} else {
			if (isFree(sandY + 1, sandX + 1)) {
				fall(sandY + 1, sandX + 1, sandChar)
			} else if (isFree(sandY + 1, sandX - 1)) {
				fall(sandY + 1, sandX - 1, sandChar)
			} else {
				box[sandY][sandX] = sandChar
				return
			}
		}
	}
}

for (let i = 0; i < N; i++) {
	var inputs = readline().split(' ')
	const S = inputs[0]
	const P = parseInt(inputs[1])
	fall(-1, P + 1, S)
}

box.forEach((line) => {
	console.log(line.join(''))
})
