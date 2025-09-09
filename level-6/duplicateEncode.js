const duplicateEncode = (str) => {
  const newArray = str.toLowerCase().split('')
  let result = []

  for (let i = 0; i < newArray.length; i++) {
    const moreThanOne = (char) => {
      const quantity = newArray.filter((item) => {
        return item === char
      })
      if (quantity.length > 1) return true
      else return false
    }

    if (moreThanOne(newArray[i])) {
      result.push(')')
    } else {
      result.push('(')
    }
  }
  return result.join('')
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('(( @'))
