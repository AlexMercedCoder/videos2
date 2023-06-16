const Cartoon = require("../../models/cartoon")

async function show(req, res){
    const id = req.params.id
    const cartoon = await Cartoon.findById(id)
    res.render("cartoon/show.ejs", {cartoon})
}

module.exports = show