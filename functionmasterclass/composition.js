// add then subtract then divide
// 
// const add = (num1, num2) => num1 + num2

// const subtract = (num1, num2) => add(num1, num2) - num2

// const divide = (num1, num2) => subtract(num1, num2) / num2

// console.log(divide(10, 2))

const add = (num1, num2) => num1 + num2

const subtract = (num1, num2) => num1 -num2

const divide = (num1, num2) => num1 / num2

console.log(divide(subtract(add(10, 2), 2), 2))
// divide(subtract(12, 2), 2)
// divide(10, 2)
//