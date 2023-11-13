const arr = [1,2,3,4,5,6,7,8,9,10]

// map - maps old array to new array
console.log("map", arr.map(item => item * 2))

// filter - filters old array to new array
console.log("filter", arr.filter(item => item % 2 === 0))

// reduce - reduces old array to a single value
console.log("reduce", arr.reduce((acc, item) => acc + item, 0))

// sort - sorts old array
console.log("sort", arr.sort((a,b) => a - b))