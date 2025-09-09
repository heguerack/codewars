const breakCamelCase = (word) => {
  let result = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      result.push(' ')
    }
    result.push(word[i])
  }
  return result.join('')
}
console.log(breakCamelCase('camelCasing'))
console.log(breakCamelCase('identifier'))
