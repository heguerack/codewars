function getPINs(observed) {
  let testNumberString = observed.toString()

  let zeroNeighbors = [0, 8]
  let oneNeighbors = [1, 2, 4]
  let twoNeighbors = [1, 2, 3, 5]
  let threeNeighbors = [2, 3, 6]
  let fourNeighbors = [1, 4, 5, 7]
  let fiveNeighbors = [2, 4, 5, 6, 8]
  let sixNeighbors = [3, 5, 6, 9]
  let sevenNeighbors = [4, 7, 8]
  let eightNeighbors = [5, 7, 8, 9, 0]
  let nineNeighbors = [6, 8, 9]

  let neighborsArrays = []

  let resultArray = []

  for (let i = 0; i < testNumberString.length; i++) {
    if (testNumberString[i] === '0') {
      neighborsArrays.push(zeroNeighbors)
    }
    if (testNumberString[i] === '1') {
      neighborsArrays.push(oneNeighbors)
    }
    if (testNumberString[i] === '2') {
      neighborsArrays.push(twoNeighbors)
    }
    if (testNumberString[i] === '3') {
      neighborsArrays.push(threeNeighbors)
    }
    if (testNumberString[i] === '4') {
      neighborsArrays.push(fourNeighbors)
    }
    if (testNumberString[i] === '5') {
      neighborsArrays.push(fiveNeighbors)
    }
    if (testNumberString[i] === '6') {
      neighborsArrays.push(sixNeighbors)
    }
    if (testNumberString[i] === '7') {
      neighborsArrays.push(sevenNeighbors)
    }
    if (testNumberString[i] === '8') {
      neighborsArrays.push(eightNeighbors)
    }
    if (testNumberString[i] === '9') {
      neighborsArrays.push(nineNeighbors)
    }
  }

  resultArray = neighborsArrays.reduce(
    (acc, curr) => {
      // For every combination we have built so far...
      const result = []
      // const result = [[1], [2], [3]]//for second iteration, each combination
      acc.forEach((combination) => {
        // ...append each element from  curr
        curr.forEach((item) => {
          result.push(combination.concat(item))
        })
      })
      return result
    },
    [[]]
  )

  return { neighborsArrays, resultArray }
}

// console.log(getPINs(8))
console.log(getPINs(11))
// console.log(getPINs(369))
