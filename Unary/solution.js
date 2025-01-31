/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline()

let binaryStr = ""
for (char in MESSAGE) {
  for (let i = 6; i >= 0; i--) {
    binaryStr += (MESSAGE.charCodeAt(char) >> i) & 1
  }
}
const charSuites = binaryStr.match(/(.)\1*/g) || []

let encodedOutput = ""
let suiteIndex = 0
for (suite of charSuites) {
  encodedOutput += suite[0] === "0" ? "00 " : "0 "
  let i = 0
  while (i < suite.length) {
    encodedOutput += "0"
    i++
  }
  suiteIndex++
  encodedOutput += suiteIndex < charSuites.length ? " " : ""
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(encodedOutput)
