const simplifyingMultilinearPolynomials = (str) => {
  let bucketArray = []

  const modifyString = () => {
    let modStr
    if (str[0] !== '-') {
      chars = str.split('')
      chars.unshift('+')
      modStr = chars.join('')
      return modStr
    } else {
      return str
    }
  }
  const workingString = modifyString(str)
  // const splitArray = workingString.split(/[-+]/).filter(Boolean) //filter boolean remoives the first " or empty string thats added a sthast a+ or _; thats just howjs works"
  const splitArray = workingString.split(/(?=[+-])/) //this ones keeps the item before the split
  for (let i = 0; i < splitArray.length; i++) {
    for (let j = 0; j < splitArray[i].length; j++) {
      if (typeof splitArray[i][j] === 'number') {
        bucketArray.push(splitArray[i].slice(0, j))
        bucketArray.push...
        break
      }
    }
  }
  // return splitArray
  return { workingString, bucketArray }
}

console.log(simplifyingMultilinearPolynomials('2xy-yx')) //xy
console.log(simplifyingMultilinearPolynomials('a+5ab-c+3a-2a')) //-c+5ab
console.log(simplifyingMultilinearPolynomials('-xzy+zby')) //byz+xyz"
