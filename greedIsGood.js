const greedIsGood = (array) => {
  const SIXs = []
  const FIVEs = []
  const FOURTHs = []
  const THREEs = []
  const TWOs = []
  const ONEs = []
  let totalPoints = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      ONEs.push(array[i])
    }
    if (array[i] === 2) {
      TWOs.push(array[i])
    }
    if (array[i] === 3) {
      THREEs.push(array[i])
    }
    if (array[i] === 4) {
      FOURTHs.push(array[i])
    }
    if (array[i] === 5) {
      FIVEs.push(array[i])
    }
    if (array[i] === 6) {
      SIXs.push(array[i])
    }
  }
  const calculateTotalPoints = () => {
    if (SIXs.length >= 3) {
      totalPoints += 600
    }
    if (FIVEs.length >= 3) {
      totalPoints += 500 + (FIVEs.length - 3) * 50
    } else {
      totalPoints += FIVEs.length * 50
    }
    if (FOURTHs.length >= 3) {
      totalPoints += 400
    }
    if (THREEs.length >= 3) {
      totalPoints += 300
    }
    if (TWOs.length >= 3) {
      totalPoints += 200
    }
    if (ONEs.length >= 3) {
      totalPoints += 1000 + (ONEs.length - 3) * 100
    } else {
      totalPoints += ONEs.length * 100
    }
  }
  calculateTotalPoints()
  return totalPoints
}

console.log(greedIsGood([5, 1, 3, 4, 1]))
console.log(greedIsGood([1, 1, 1, 3, 1]))
console.log(greedIsGood([2, 4, 4, 5, 4]))
