const Cartoon = require("../../models/cartoon")

async function destroy(req, res){
    const id = req.params.id
    await Cartoon.findByIdAndRemove(id)
    res.redirect("/cartoon")
}

module.exports = destroy