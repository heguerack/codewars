// Passed!!
const SumOddEven = (numbersArray) => {
  let result = 0

  for (let i = 0; i < numbersArray.length; i++) {
    result += numbersArray[i]
  }
  if (result % 2 === 0) {
    return 'even'
  }
  return 'odd'
}

console.log(SumOddEven([0]))
console.log(SumOddEven([0, 1, 4]))
console.log(SumOddEven([0, -1, -5]))
