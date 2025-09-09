const vowelCount = (str) => {
  let count = 0
  const strArray = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (
      strArray[i] === 'a' ||
      strArray[i] === 'e' ||
      strArray[i] === 'i' ||
      strArray[i] === 'o' ||
      strArray[i] === 'u'
    ) {
      count++
    }
  }
  return count
}

console.log(vowelCount('ffsjerwiewqo'))
console.log(vowelCount('harmlessgiraffe'))
console.log(vowelCount('vintageoceanwave'))
console.log(vowelCount('papayasunshine'))
