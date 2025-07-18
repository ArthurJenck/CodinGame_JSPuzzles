const deckSuits = ['C', 'D', 'H', 'S']
const deckRanks = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'T',
  'J',
  'Q',
  'K',
  'A',
]
const deck = {}
for (const suit of deckSuits) {
  deck[suit] = Array.from(deckRanks)
}

var inputs = readline().split(' ')
const R = parseInt(inputs[0])
const S = parseInt(inputs[1])
let removedList = []
let soughtList = []

for (let i = 0; i < R; i++) {
  removed = readline()
  removedList.push(removed)
}
for (let i = 0; i < S; i++) {
  sought = readline()
  soughtList.push(sought)
}

const removeCard = (suit, rank) => {
  if (!deck[suit]) {
    return false
  }
  const idx = deck[suit].indexOf(rank)
  if (idx < 0) {
    return false
  }
  deck[suit].splice(idx, 1)
  return true
}

removedList.forEach((removed) => {
  const removedRanks = []
  const removedSuits = []
  removed.split('').forEach((removedChar) => {
    if (deckRanks.includes(removedChar)) removedRanks.push(removedChar)
    if (deckSuits.includes(removedChar)) removedSuits.push(removedChar)
  })
  if (removedSuits.length === 0) {
    removedRanks.forEach((removedRank) => {
      for (const suit in deck) {
        removeCard(suit, removedRank)
      }
    })
  }
  if (removedRanks.length === 0) {
    removedSuits.forEach((removedSuit) => {
      delete deck[removedSuit]
    })
  }
  removedSuits.forEach((removedSuit) => {
    removedRanks.forEach((removedRank) => {
      removeCard(removedSuit, removedRank)
    })
  })
})

let total = 0
for (const suit in deck) {
  total += deck[suit].length
}

let soughtMatch = 0
soughtList.forEach((sought) => {
  const soughtRanks = []
  const soughtSuits = []
  sought.split('').forEach((soughtChar) => {
    if (deckRanks.includes(soughtChar)) soughtRanks.push(soughtChar)
    if (deckSuits.includes(soughtChar)) soughtSuits.push(soughtChar)
  })
  if (soughtSuits.length === 0) {
    soughtRanks.forEach((soughtRank) => {
      for (const suit in deck) {
        if (removeCard(suit, soughtRank)) soughtMatch++
      }
    })
    return
  }
  if (soughtRanks.length === 0) {
    soughtSuits.forEach((soughtSuit) => {
      soughtMatch += deck[soughtSuit].length
      delete deck[soughtSuit]
    })
    return
  }
  soughtSuits.forEach((soughtSuit) => {
    soughtRanks.forEach((soughtRank) => {
      if (removeCard(soughtSuit, soughtRank)) soughtMatch++
    })
  })
})

console.log(Math.floor((soughtMatch / total) * 100) + '%')
