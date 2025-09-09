const disemvowelTroll = (str) => {
  const strArray = str.split('')
  let newArray = []

  const vowelsSet = new Set('aeiouAEIOU')
  for (let i = 0; i < strArray.length; i++) {
    if (!vowelsSet.has(strArray[i])) {
      newArray.push(strArray[i])
    }
  }

  // for (let i = 0; i < strArray.length; i++) {
  //   if (
  //     strArray[i] !== 'a' &&
  //     strArray[i] !== 'e' &&
  //     strArray[i] !== 'i' &&
  //     strArray[i] !== 'o' &&
  //     strArray[i] !== 'u' &&
  //     strArray[i] !== 'A' &&
  //     strArray[i] !== 'E' &&
  //     strArray[i] !== 'I' &&
  //     strArray[i] !== 'O' &&
  //     strArray[i] !== 'U'
  //   ) {
  //     newArray.push(strArray[i])
  //   }
  // }

  return newArray.join('')
}

console.log(disemvowelTroll('This website is for losers LOL!'))
// console.log(disemvowelTroll('harmlessgiraffe'))
// console.log(disemvowelTroll('vintageoceanwave'))
// console.log(disemvowelTroll('papayasunshine'))
