function addNums(x: number, y: number): number {
    return x + y
}

addNums(1, 1)

type oneToFive = 1|2|3|4|5

function addCertainNums(x: oneToFive, y: oneToFive): number{
    return x + y
}

addCertainNums(1,3)