interface Person {
    name: string,
    age: number,
    [key: string]: any
}

const Alex: Person = {
    name: "Alex Merced",
    age: 37,
    email: "alex@alexmercedcoder.dev"
}

type numOrString = number|string

const arr: Array<numOrString> = [1,2,3,"4"]