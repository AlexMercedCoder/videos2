// ----------------------------
// Function Return Values
// Return Value: The single value a function gives back to the caller.

function addNums(num1, num2){
    return num1 + num2;
    // console.log(num1 + num2);
    // console.log("cheese")
}

const result = addNums(1,2)
console.log("Result: ", result)

console.log(addNums(addNums(1,1), addNums(2,2)))
//addNums(2, addNums(2,2))
//addNums(2,4)
// 6