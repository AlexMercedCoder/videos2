const cp = require("child_process")
const [,, ...args] = process.argv

console.log(args)

let output

switch (args[0]){
    case "run-one":
        output = cp.execSync("bun run one.js")
        break

    case "run-two":
        output = cp.execSync("bun run two.js")
        break

    case "run-both":
        output = cp.execSync("bun run one.js && deno run two.js")
        break

    default:
        console.log("don't recognize command")
        break
}

console.log(output.toString())