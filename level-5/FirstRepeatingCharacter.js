const FirstRepeatingCharacter = (mystr) => {
  //if all repeat return ""
  //oherwise return the first thet repetas
  const str = mystr.toLowerCase()
  let result = ''
  let bucketArray = []

  if (str.length === 1) {
    result = str
    return result
  } else if (new Set(str).size === 1 && str.length > 1) {
    return result
  } else {
    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
        bucketArray.push(str[i])
      } else {
        if (bucketArray.includes(str[i])) {
          result = str[i]
          break
        } else if (!bucketArray.includes(str[i]) && i === str.length - 1) {
          result = str[0]
          break
        } else {
          bucketArray.push(str[i])
        }
      }
    }
    return result
  }
}

console.log(FirstRepeatingCharacter('stress'))
console.log(FirstRepeatingCharacter('moonmen'))
