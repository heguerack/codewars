const FirstNonRepeatingCharacter = (mystr) => {
  //if all repeat return ""
  //oherwise return the first thet repetas
  let result = ''
  const str = mystr.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str.split(str[i]).length - 1 === 1) {
      result = mystr[i]
      break
    }
  }
  return result
}

console.log(FirstNonRepeatingCharacter('stress'))
console.log(FirstNonRepeatingCharacter('moonmen'))
