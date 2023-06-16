const Cartoon = require("../../models/cartoon")

async function index(req, res){
    const cartoons = await Cartoon.find({})
    res.render("cartoon/index.ejs", {cartoons})
}

module.exports = index