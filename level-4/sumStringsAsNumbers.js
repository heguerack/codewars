const sumStringsAsNumbers = (str1, str2) => {
  // const numb1 = Number(str1)
  // const numb2 = Number(str2)
  const numb1 = BigInt(str1)
  const numb2 = BigInt(str2)
  let sum = numb2 + numb1
  return sum.toString()
  // return typeof dif.toString()
}
console.log(
  sumStringsAsNumbers('712569312664357328695151392', '8100824045303269669937')
)
