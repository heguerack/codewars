let stats = [
  {
    _id: 'declined',
    count: 27,
  },
  {
    _id: 'pending',
    count: 28,
  },
  {
    _id: 'interview',
    count: 25,
  },
]

stats = stats.reduce((acc, curr) => {
  //we start with acc and return acc
  //we loop though each object
  const { _id: title, count } = curr
  acc[title] = count
  return acc
}, {})
