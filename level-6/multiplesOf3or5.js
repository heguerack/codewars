const multiplesOf3or5 = (n) => {
  let count = 0
  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      count += i
    }
  }
  return count
}

console.log(multiplesOf3or5(10))
