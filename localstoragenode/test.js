const LocalStorage = require("./LocalStorage")

const localStorage = new LocalStorage("1.json")
const localStorage2 = new LocalStorage("2.json")

localStorage.setItem("name", "Alex Merced")
localStorage2.setItem("name", "Hector Merced")