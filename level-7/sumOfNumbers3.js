function sumOfNumbers(a, b) {
  const delta = b - a
  let sum = 0
  for (i = a; i <= b; i++) {
    sum = sum + i
  }
  return sum
}

console.log(sumOfNumbers(0, -1))
