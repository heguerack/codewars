/// Encrypt this!   Encrypt this!   Encrypt this!   Encrypt this!
/// Encrypt this!   Encrypt this!   Encrypt this!   Encrypt this!
/// Encrypt this!   Encrypt this!   Encrypt this!   Encrypt this!

// 🔤 Letter ➡ ASCII code
'a'.charCodeAt(0) // 97
'Z'.charCodeAt(0) // 90

// 🔢 ASCII code ➡ Letter
String.fromCharCode(97) // 'a'
String.fromCharCode(90) // 'Z'

const encryptThis = (word) => {
  result = word.split(' ').map(
    (item) =>
      item.charAt(0).charCodeAt(0) + //72
      item.charAt(item.length - 1) + //o
      item.slice(2, item.length - 1) +
      item.slice(1, 2) //e)
  )

  return result.join(' ')
}

console.log(encryptThis('Hello'))
console.log(encryptThis('good'))
console.log(encryptThis('hello world'))
