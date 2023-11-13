// functions have parameters and arguments
function myFunc(a, b) {
    console.log(a, b);
    console.log("the value of b", b)
    console.log("the return value of b", b())
}

myFunc("1", () => 1);

function returnTwo(){
    return 2
}

myFunc("1", returnTwo);

// Callback is a function passed as an argument to another function