/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline())
const H = parseInt(readline())
const T = readline()
const TUp = T.toUpperCase()
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?"

for (let i = 0; i < H; i++) {
  const ROW = readline()
  let wholeLine = ""
  for (let j = 0; j < TUp.length; j++) {
    wholeLine +=
      alphabet.indexOf(TUp[j]) * L < 0
        ? ROW.slice(alphabet.indexOf("?") * L, alphabet.indexOf("?") * L + L)
        : ROW.slice(
            alphabet.indexOf(TUp[j]) * L,
            alphabet.indexOf(TUp[j]) * L + L
          )
  }
  console.log(wholeLine)
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// console.log(word);
