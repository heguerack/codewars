const createPhoneNumber = (numbers) => {
  const filteredArray = numbers.join('').split('')
  let mewArray = ['(']

  for (let i = 0; i < filteredArray.length; i++) {
    if (i === 2) {
      mewArray.push(filteredArray[i])
      mewArray.push(') ')
    } else if (i === 5) {
      mewArray.push(filteredArray[i])
      mewArray.push('-')
    } else {
      mewArray.push(filteredArray[i])
    }
  }
  return mewArray.join('')
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
