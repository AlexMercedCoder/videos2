// accessing a functions return value

const returnNum = () => 1;

// accessin the function
console.log(returnNum)
// accessing the return value
console.log(returnNum())


// accessing an array returned by a functions

const returnArr = () => [1,2,3,4,5];

console.log(returnArr)
console.log(returnArr())
console.log(returnArr()[3])

// access a object returned by an array

const returnObj = () => { return {name: 'Alex', age: 38}};

console.log(returnObj)
console.log(returnObj())
console.log(returnObj().name)