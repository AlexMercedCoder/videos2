const Cartoon = require("./cartoon")
const mongoose = require("./connection")
const cartoons = require("./seedData")


async function seed(){
    // delete everything in the database
    await Cartoon.deleteMany({})
    // what you want to do it here
    const createdCartoons = await Cartoon.create(cartoons)
    console.log(createdCartoons.length)
    console.log(createdCartoons[0])
}


// run the seed function when the database connect
mongoose.connection.on("open", () => {seed()})