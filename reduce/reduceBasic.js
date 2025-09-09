//Reduce
//iterates. callback function
//reduces to a single value - number, array, object
//1st parameter ("acc")-total all calculations, it can be called whatever else, but he job is the same lol
//2nd ("curr") - current iteration/value

///REDUCE ARRAYS
const employees = [
  { name: 'Alice', age: 28, position: 'Developer', salary: 70000 },
  { name: 'Bob', age: 32, position: 'Designer', salary: 65000 },
  { name: 'Charlie', age: 26, position: 'QA Engineer', salary: 60000 },
  { name: 'David', age: 35, position: 'Manager', salary: 90000 },
  { name: 'Eva', age: 30, position: 'DevOps', salary: 75000 },
  { name: 'Frank', age: 40, position: 'CTO', salary: 120000 },
]

const dailyTotal = employees.reduce((acc, curr) => {
  console.log(acc)
  // console.log(curr.salary)
  acc += curr.salary
  return acc
}, 0)
// console.log(dailyTotal)

///REDUCE OBJECTS
const cart = [
  { title: 'Wireless Mouse', price: 19.99, amount: 1 },
  { title: 'Mechanical Keyboard', price: 89.99, amount: 1 },
  { title: 'USB-C Cable', price: 9.99, amount: 3 },
  { title: 'HDMI Adapter', price: 15.99, amount: 2 },
  { title: 'Laptop Stand', price: 39.99, amount: 1 },
  { title: 'Bluetooth Speaker', price: 49.99, amount: 1 },
  { title: 'Webcam', price: 59.99, amount: 1 },
  { title: '27-inch Monitor', price: 199.99, amount: 2 },
  { title: 'External Hard Drive', price: 79.99, amount: 1 },
  { title: 'Desk Lamp', price: 24.99, amount: 1 },
]

let total = reduce((acc, curr) => {
  return acc
}, 0)
