function arrayDiff(a, b) {
  if (b.length === 0) return a
  let result = a
  for (i = 0; i <= b.length - 1; i++) {
    result = result.filter((item) => item !== b[i])
  }
  return result
}

console.log(arrayDiff([1, 2], [1]))
// console.log(arrayDiff([1, 2, 2], [1]))
// console.log(arrayDiff([1, 2, 2], []))
// console.log(arrayDiff([1, 2, 3], [1, 2]))
