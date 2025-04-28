/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = readline()
const LAT = readline()
const N = parseInt(readline())
const distances = []
const defibs = []
for (let i = 0; i < N; i++) {
	const DEFIB = readline().split(';')

	const x =
		(Number(LON.replace(',', '.')) - Number(DEFIB[4].replace(',', '.'))) *
		Math.cos(
			(Number(DEFIB[5].replace(',', '.')) + Number(LAT.replace(',', '.'))) / 2
		)
	const y = Number(LAT.replace(',', '.')) - Number(DEFIB[5].replace(',', '.'))
	const d = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) * 6371

	defibs.push(DEFIB[1])
	distances.push(d)
}

console.log(defibs[distances.indexOf(Math.min(...distances))])
