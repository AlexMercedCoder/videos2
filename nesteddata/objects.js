// object

const alex = {
    name: "Alex Merced",
    age: 38,
    hobbies: ['coding', 'gaming', 'movies'],
    address: {
        street: '123 Main St',
        city: 'Brooklyn',
        state: 'NY'
    },
    greet: function() {
        console.log('Hello World')
    }
}

// dot notation
console.log(alex.name)
// square bracket notation
console.log(alex['name'])

// access an array inside of an object
console.log(alex.hobbies[1])

// access an object inside of an object
console.log(alex.address)
console.log(alex.address.city)

//accessing a function inside of an object
console.log(alex.greet())