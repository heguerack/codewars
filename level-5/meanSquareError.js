const meanSquareError = (arr1, arr2) => {
  // accepts two integer arrays of equal length
  //  compare the value each member in one array to the corresponding member in the other
  // squares the absolute value difference between those two values
  // and returns the average of those squared absolute value difference between each member pair.
  let count = 0
  let sum = 0
  let average = 0

  for (let i = 0; i < arr1.length; i++) {
    let dif = 0
    dif = arr1[i] - arr2[i]
    count++
    sum += dif * dif
  }
  average = sum / count
  return average
}
console.log(meanSquareError([1, 2, 3], [4, 5, 6]))
