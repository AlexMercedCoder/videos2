function operateOneWithOne(cb){
    return cb(1,1)
}

console.log(operateOneWithOne((a,b) => a + b))
console.log(operateOneWithOne((a,b) => a - b))
console.log(operateOneWithOne((a,b) => a * b))
console.log(operateOneWithOne((a,b) => a / b))

// Higher Order Functions
// a function that represents portion of the logic and takes another function for the remaining logic