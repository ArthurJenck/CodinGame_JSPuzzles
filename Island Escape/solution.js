const N = parseInt(readline())
const map = []
const visited = new Set()

for (let i = 0; i < N; i++) {
	var inputs = readline().split(' ')
	map.push(inputs.map(Number))
}

const explore = (y, x, prevElevation) => {
	const currElevation = map[y][x]

	if (y < 0 || x < 0 || y >= N || x >= N) return false
	if (Math.abs(currElevation - prevElevation) > 1) return false
	if (currElevation === 0) return true

	const currSpot = `${y},${x}`
	if (visited.has(currSpot)) return false
	visited.add(currSpot)

	return (
		explore(y + 1, x, currElevation) ||
		explore(y - 1, x, currElevation) ||
		explore(y, x + 1, currElevation) ||
		explore(y, x - 1, currElevation)
	)
}

const canReachOcean = explore(
	Math.floor(N / 2),
	Math.floor(N / 2),
	map[Math.floor(N / 2)][Math.floor(N / 2)]
)

console.log(canReachOcean ? 'yes' : 'no')
