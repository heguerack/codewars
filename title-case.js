// Failed for some tests

console.log('Hello, World!')
function titleCase(title, minorWords = '') {
  const titleArray = title.toLowerCase().split(' ')
  const minorSet = new Set(minorWords.toLowerCase().split(' '))

  const result = titleArray.map((item, index) => {
    if (index === 0 || !minorSet.has(item)) {
      return item.charAt(0).toUpperCase() + item.slice(1)
    }
    return item
  })

  return result.join(' ')
}
console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('the quick brown fox'))
