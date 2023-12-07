const origArr = [1,2,3,4,5,6,7,8,9]

const fiveRandomItems = (arr) => {
    const newArray = [] // blank array to store our five items
    const arrCopy = [...arr] // copy of array that was passed in

    // loop 5 times, remove one item from copy on each loop
    for(let i = 0; i < 5; i++){
        // a random index with the arrays length
        const randomIndex = Math.floor(Math.random() * arrCopy.length)
        // splice item from copy and push into new array
        newArray.push(arrCopy.splice(randomIndex, 1)[0])
    }

    // return array of 5 items after look
    return newArray
}

console.log(fiveRandomItems(origArr))