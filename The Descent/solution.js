/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/

// game loop
while (true) {
  // Le tableau highest contient deux éléments, qui seront le numéro de la montagne, puis sa hauteur
  const highest = [0, 0]
  for (let i = 0; i < 8; i++) {
    const mountainH = parseInt(readline()) // represents the height of one mountain.
    // Pour chaque montagne, on regarde si sa hauteur est supérieure à celle qui était actuellement la plus élevée
    if (mountainH > highest[1]) {
      highest[0] = i
      highest[1] = mountainH
    }
  }

  console.log(highest[0]) // The index of the mountain to fire on.
}
