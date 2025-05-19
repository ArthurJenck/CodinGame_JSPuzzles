/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline())
let acc = 1
let diagNums = [1]
let step = n - 1
const square = Math.pow(n, 2)
while (step > 0 && !diagNums.includes(square)) {
	for (let i = 0; i < 4; i++) {
		acc += step
		if (acc <= square) {
			diagNums.push(acc)
		}
	}
	step -= 2
}

console.log(diagNums.reduce((acc, currentValue) => acc + currentValue))
