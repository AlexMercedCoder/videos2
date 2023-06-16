const Cartoon = require("../../models/cartoon")

async function create(req, res){
    const cartoon = await Cartoon.create(req.body)
    res.redirect("/cartoon")
}

module.exports = create