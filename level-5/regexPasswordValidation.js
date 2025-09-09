const regexPasswordValidation = (str) => {
  //new RegExp("[A-Z]") = /[A-Z]///just to remeber
  if (
    /[A-Z]/.test(str) &&
    /[a-z]/.test(str) &&
    /[0-9]/.test(str) &&
    !/[^A-Za-z0-9]/.test(str) &&
    str.length >= 8
  ) {
    return true
  } else {
    return false
  }
}
console.log(regexPasswordValidation('dfdfgTTE566'))
console.log(regexPasswordValidation('dfdf'))
