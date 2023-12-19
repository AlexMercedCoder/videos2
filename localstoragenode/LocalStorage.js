const fs = require("fs")

class LocalStorage {

    constructor(filename){
        this.filename = filename
        this.data = {}
        this.loadData()
    }

    getItem(key){
        return this.data[key]
    }

    setItem(key, data){
        this.data[key] = data
        this.saveData()
    }

    removeItem(key){
        this.data[key] = undefined
        this.saveData()
    }

    loadData(){
        if (fs.existsSync(this.filename)){
            const data = JSON.parse(fs.readFileSync(this.filename))
            this.data = data
        }
    }

    saveData(){
        fs.writeFileSync(this.filename, JSON.stringify(this.data))
    }
}

module.exports = LocalStorage