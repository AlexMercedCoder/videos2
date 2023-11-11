function addAll() {
    let result = 0

    for (let arg of arguments){
        result += arg
    }

    return result
}

const result = addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 1)

console.log(result)


function addAll2(...args){
    return args.reduce((acc, curr) => acc + curr, 0)
}

const result2 = addAll2(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(result2)


function addAll3(arr){
    return arr.reduce((acc, curr) => acc + curr, 0)
}

const result3 = addAll3([1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(result3)

function calculator(options){
    const {defaultNum = 0} = options
    const { num1 = defaultNum, num2 = defaultNum, operation = "add"} = options

    switch(operation){
        case "add":
            return num1 + num2
        case "subtract":
            return num1 - num2
        case "multiply":
            return num1 * num2
        case "divide":
            return num1 / num2
        default:
            return "invalid operation"
    }
}

console.log(calculator({ num1: 1, num2: 2, operation: "add" }))
console.log(calculator({ operation: "subtract", num1: 1, num2: 2 }))
console.log(calculator({operation: "add", defaultNum: 10}))