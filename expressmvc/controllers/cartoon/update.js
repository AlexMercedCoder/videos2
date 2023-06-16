const Cartoon = require("../../models/cartoon")

async function update(req, res){
    const id = req.params.id
    await Cartoon.findByIdAndUpdate(id, req.body)
    res.redirect("/cartoon")
}

module.exports = update