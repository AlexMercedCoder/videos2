const test = require("node:test")
const assert = require("node:assert")
const addNums = require("../add")


// console.count()

test.describe("addNums", () => {
    test.it("should add correctly", () => {
        assert.strictEqual(
            addNums(2,2),
            4
        )
    })
})