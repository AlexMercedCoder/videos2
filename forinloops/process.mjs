import data from "./data.mjs";

const sentence = data.reduce((sent, word) => {
    for(let key in word){
        if (key === "upper" && word.upper){
            word.word = word.word.toUpperCase()
        }

        if (key === "lower" && word.lower){
            word.word = word.word.toLowerCase()
        }

        if (key === "reversed" && word.reversed){
            word.word = word.word.split("").reverse().join("")
        }
    }

    return sent + word.word + " "
}, "")

console.log(sentence)