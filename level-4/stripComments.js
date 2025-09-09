const stripComments = (text, markers) => {
  const markersSet = new Set(markers)
  const linesArray = text.split('\n')
  const resultArray = []

  const hasNone = (line) => {
    return line.split('').every((item) => !markersSet.has(item))
  }

  for (const line of linesArray) {
    if (!hasNone(line)) {
      for (let i = 0; i < line.length; i++) {
        if (markersSet.has(line[i])) {
          if (i === 0) {
            resultArray.push('')
          } else if (line[i - 1] === ' ') {
            resultArray.push(line.slice(0, i - 1))
          } else {
            resultArray.push(line.slice(0, i))
          }
          break
        }
      }
    } else {
      resultArray.push(line.trimEnd())
    }
  }
  return resultArray.join('\n')
}

console.log(stripComments('aa bb\ncc dd#', ['#']))
