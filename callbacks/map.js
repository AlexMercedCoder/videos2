const arr = [1,2,3,4,5,6,7,8,9,10]

const newArr = []

for(let i = 0; i < arr.length; i++){
    const item = arr[i]
    newArr.push(item * 2)
}

console.log("old array", arr)
console.log("new array", newArr)

function mapOldArrayToNewArray(arr, cb){
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        const item = arr[i]
        newArr.push(cb(item, i))
    }
    return newArr

}

console.log(mapOldArrayToNewArray(arr, (item, index) => item * 2))
console.log(mapOldArrayToNewArray(arr, (item, index) => item * 3))

arr.map(item => item * 2)