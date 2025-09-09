//Sattus = Unfinished

const findUniqueNumber = (numberArray) => {
  let number
  let result
  for (let i = 0; i < numberArray.length; i++) {
    if (i === 0) {
      number = numberArray[i]
      continue
    }
    if (numberArray[i] !== number) {
      if (numberArray[i] === numberArray[i + 1]) {
        result = numberArray[0]
      } else {
        result = numberArray[i]
      }
      break
    }
  }
  return result
}

console.log(findUniqueNumber([1, 1, 1, 2, 1, 1]))
console.log(findUniqueNumber([0, 0, 0.55, 0, 0]))
console.log(findUniqueNumber([2, 1, 1, 1, 1, 1]))
