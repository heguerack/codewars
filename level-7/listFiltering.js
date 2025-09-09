const listFiltering = (arr) => {
  // let newArray = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === 'number') {
  //     newArray.push(arr[i])
  //   }
  // }
  // return newArray
  const filterdArray = arr.filter((item) => {
    return typeof item === 'number'
  })

  return filterdArray
}

console.log(listFiltering([1, 2, 'a', 'b']))
console.log(listFiltering([1, 'a', 'b', 0, 15]))
console.log(listFiltering([1, 2, 'aasf', '1', '123', 123]))
