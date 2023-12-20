const Person = require("./Person");
const mongoose = require("./connection");

mongoose.connection.on("open", async () => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(
      "6583117d6f87dae6ab0d1981"
    );

    Person.

    console.log(deletedPerson);
  } catch (error) {
    console.log(error.message);
  }
});
