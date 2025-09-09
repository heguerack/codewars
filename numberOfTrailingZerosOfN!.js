const numberOfTrailingZerosOfN = (n) => {
  let count = 0
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i)
  }
  return count
}
console.log(numberOfTrailingZerosOfN(4))
console.log(numberOfTrailingZerosOfN(9))
console.log(numberOfTrailingZerosOfN(13))
console.log(numberOfTrailingZerosOfN(20))
console.log(numberOfTrailingZerosOfN(25))
