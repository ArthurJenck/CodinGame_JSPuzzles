const N = parseInt(readline())
const horses = []
for (let i = 0; i < N; i++) {
	const pi = parseInt(readline())
	horses.push(pi)
}
horses.sort((a, b) => b - a)
let smallestGap = 10000000
for (let i = 0; i < horses.length; i++) {
	smallestGap =
		horses[i] - horses[i + 1] < smallestGap
			? horses[i] - horses[i + 1]
			: smallestGap
}

console.log(smallestGap)
