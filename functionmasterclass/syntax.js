//---------------------------------------------
// Function
//---------------------------------------------
// Description: Functions are a block of code that can be called from anywhere in the program.
// Run that code wheneven the function is INVOKED or CALLED by name `functionName()`.


// Creating a function - NOT USING THE FUNCTION
function greeting(){
    console.log("G'day!");
}

// Invoking the function - Calling the function - Using the function
greeting()
greeting()
greeting()

// method 2 - function expression
const greeting2 = function(){
    console.log("G'day!");
}

greeting2()
greeting2()
greeting2()

// const notAFunction = 1

// notAFunction()

// method 3 - arrow function
const greeting3 = () => console.log("G'day!");

greeting3()
greeting3()
greeting3()