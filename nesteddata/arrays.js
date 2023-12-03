// array
const arr = [1, 2, 3, 4, 5, 6];

console.log(arr[2])

// array inside of an array (multidimensional array)
const arr2 = [1,2,3,[4,5,6]];

console.log(arr2[3][1])

// object inside of an arrary

const people = [
    {name: 'John', age: 20},
    {name: 'Jane', age: 25},
    {name: 'Jack', age: 30}
  ];

console.log(people[1].age)
console.log(people[1]['age'])

// function in an array

const arr3 = [1,2,3, function() {console.log('hello world')}];

console.log(arr3[3]())