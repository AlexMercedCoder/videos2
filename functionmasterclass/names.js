// "create" - return an object of a certain type of data
function createPerson(firstName, lastName, age, gender){
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender
    }
}

const alex = createPerson("Alex", "Merced", 38, "Male")
console.log(alex)

// function to "GET" the values from the object
function getFullName(person){
    return person.firstName + " " + person.lastName
}

console.log(getFullName(alex))

// function to "SET" the age
function setAge(person, age){
    person.age = age
    return "age set"
}

setAge(alex, 39)
console.log(alex)

// FOR true/false prefix function names with "is"
function isDrinkingAge(person){
    return person.age >= 21
}

console.log(isDrinkingAge(alex))

if(isDrinkingAge(alex)){
    console.log("drinking age")
} else {
    console.log("not drinking age")
}