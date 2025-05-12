/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline())
const m = parseInt(readline())

const inputSignals = {}
const outputSignals = {}

for (let i = 0; i < n; i++) {
	var inputs = readline().split(' ')
	inputSignals[inputs[0]] = inputs[1]
}

for (let i = 0; i < m; i++) {
	var inputs = readline().split(' ')
	const signalA = inputSignals[inputs[2]]
	const signalB = inputSignals[inputs[3]]
	const outputSignal = []

	for (let j = 0; j < signalA.length; j++) {
		switch (inputs[1]) {
			case 'AND':
				if (signalA[j] === '-' && signalB[j] === '-') {
					outputSignal.push('-')
				} else {
					outputSignal.push('_')
				}
				break
			case 'OR':
				if (signalA[j] === '-' || signalB[j] === '-') {
					outputSignal.push('-')
				} else {
					outputSignal.push('_')
				}
				break
			case 'XOR':
				if (signalA[j] !== signalB[j]) {
					outputSignal.push('-')
				} else {
					outputSignal.push('_')
				}
				break
			case 'NAND':
				if (signalA[j] === '-' && signalB[j] === '-') {
					outputSignal.push('_')
				} else {
					outputSignal.push('-')
				}
				break
			case 'NOR':
				if (signalA[j] === '_' && signalB[j] === '_') {
					outputSignal.push('-')
				} else {
					outputSignal.push('_')
				}
				break
			case 'NXOR':
				if (signalA[j] === signalB[j]) {
					outputSignal.push('-')
				} else {
					outputSignal.push('_')
				}
				break
			default:
				break
		}
	}
	outputSignals[inputs[0]] = outputSignal.join('')
}

for (const name in outputSignals) {
	console.log(name, outputSignals[name])
}
