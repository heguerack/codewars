const stopGninnipsMysdroW = (string) => {
  const newArray = string.split(' ')
  const result = newArray.map((item) => {
    if (item.length >= 5) {
      return item.split('').reverse().join('')
    } else {
      return item
    }
  })
  return result.join(' ')
}

console.log(stopGninnipsMysdroW('Hey fellow warriors'))
console.log(stopGninnipsMysdroW('This is a test'))
console.log(stopGninnipsMysdroW('This is another test'))
