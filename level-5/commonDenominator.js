const commonDenominator = (arr) => {
  let resultArray = []
  let MCD = 1
  let dividedby = true

  for (let i = 0; i < arr.length; i++) {
    MCD = MCD * arr[i][1]
  }
  for (let i = 0; i < arr.length; i++) {
    let n = MCD / arr[i][1]
    let N = arr[i][0] * n
    let D = arr[i][1] * n
    resultArray.push([N, D])
  }

  if (MCD % 2 === 0) {
    ///divede by 2
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i][0] % 2 !== 0) {
        dividedby = false
        break
      }
    }
    if (dividedby) {
      resultArray = resultArray.map((item) => {
        return [item[0] / 2, item[1] / 2]
      })
    }
    if (MCD % 2 === 0) {
      ///divede by 2 again
      for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i][0] % 2 !== 0) {
          dividedby = false
          break
        }
      }
      if (dividedby) {
        resultArray = resultArray.map((item) => {
          return [item[0] / 2, item[1] / 2]
        })
      }
      if (MCD % 2 === 0) {
        ///divede by 2 again
        for (let i = 0; i < resultArray.length; i++) {
          if (resultArray[i][0] % 2 !== 0) {
            dividedby = false
            break
          }
        }
        if (dividedby) {
          resultArray = resultArray.map((item) => {
            return [item[0] / 2, item[1] / 2]
          })
        }
        if (MCD % 2 === 0) {
          ///divede by 2 again
          for (let i = 0; i < resultArray.length; i++) {
            if (resultArray[i][0] % 2 !== 0) {
              dividedby = false
              break
            }
          }
          if (dividedby) {
            resultArray = resultArray.map((item) => {
              return [item[0] / 2, item[1] / 2]
            })
          }
        }
      }
    }
  }

  if (MCD % 3 === 0) {
    ///divede by 2
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i][0] % 3 !== 0) {
        dividedby = false
        break
      }
    }
    if (dividedby) {
      resultArray = resultArray.map((item) => {
        return [item[0] / 3, item[1] / 3]
      })
    }
    if (MCD % 3 === 0) {
      ///divede by 3 again
      for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i][0] % 3 !== 0) {
          dividedby = false
          break
        }
      }
      if (dividedby) {
        resultArray = resultArray.map((item) => {
          return [item[0] / 3, item[1] / 3]
        })
      }
    }
  }

  if (MCD % 5 === 0) {
    ///divede by 2
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i][0] % 5 !== 0) {
        dividedby = false
        break
      }
    }
    if (dividedby) {
      resultArray = resultArray.map((item) => {
        return [item[0] / 5, item[1] / 5]
      })
    }
    if (MCD % 5 === 0) {
      ///divede by 5 again
      for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i][0] % 5 !== 0) {
          dividedby = false
          break
        }
      }
      if (dividedby) {
        resultArray = resultArray.map((item) => {
          return [item[0] / 5, item[1] / 5]
        })
      }
    }
  }

  if (MCD % 7 === 0) {
    ///divede by 2
    for (let i = 0; i < resultArray.length; i++) {
      if (resultArray[i][0] % 7 !== 0) {
        dividedby = false
        break
      }
    }
    if (dividedby) {
      resultArray = resultArray.map((item) => {
        return [item[0] / 7, item[1] / 7]
      })
    }
    if (MCD % 7 === 0) {
      ///divede by 7 again
      for (let i = 0; i < resultArray.length; i++) {
        if (resultArray[i][0] % 7 !== 0) {
          dividedby = false
          break
        }
      }
      if (dividedby) {
        resultArray = resultArray.map((item) => {
          return [item[0] / 7, item[1] / 7]
        })
      }
      if (MCD % 7 === 0) {
        ///divede by 7 again
        for (let i = 0; i < resultArray.length; i++) {
          if (resultArray[i][0] % 7 !== 0) {
            dividedby = false
            break
          }
        }
        if (dividedby) {
          resultArray = resultArray.map((item) => {
            return [item[0] / 7, item[1] / 7]
          })
        }
      }
    }
  }
  return resultArray
}

// console.log(
//   commonDenominator([
//     [1, 2],
//     [1, 3],
//     [1, 4],
//   ])
// )
console.log(
  commonDenominator([
    [6, 12],
    [4, 12],
    [3, 12],
  ])
)
