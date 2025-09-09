const whatsaPerfectPowerAnyway = (n) => {
  if (n < 2) return null

  for (let base = 2; base <= Math.sqrt(n); base++) {
    let exp = Math.log(n) / Math.log(base)
    let roundedExp = Math.round(exp)

    if (base ** roundedExp === n) {
      return [base, roundedExp]
    }
  }

  return null
}
console.log(whatsaPerfectPowerAnyway(4))

console.log(whatsaPerfectPowerAnyway(9))
console.log(whatsaPerfectPowerAnyway(64))
console.log(whatsaPerfectPowerAnyway(65))
console.log(whatsaPerfectPowerAnyway(625))

// console.log(whatsaPerfectPowerAnyway(8))
