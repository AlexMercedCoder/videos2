class SomeLibrary {
    constructor(){
        this.metadata = new Map()
        this.settings = new Symbol()
        this.metadata.set(this.settings, {})
    }

    changeSetting(key, value){
        this.metadata.get(this.settings)[key] = value
    }

    getSettings(key){
        return this.metadata.get(this.settings)[key]
    }
}