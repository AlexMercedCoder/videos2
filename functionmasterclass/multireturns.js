// Multiple Return Values: A function can return multiple values using an array.

function calculations(num1, num2){
    return {
        add: num1 + num2,
        subtract: num1 - num2,
        multiply: num1 * num2,
        divide: num1 / num2
    }
}

console.log(calculations(10, 20))

function calculations2(num1, num2){
    return [num1 + num2, num1 - num2, num1 * num2, num1 / num2]
}

console.log(calculations2(10, 20))