const index = require("./indexRoute");
const newCartoon = require("./new");
const show = require("./show")
const create = require("./create")
const edit = require("./edit")
const update = require("./update")
const destroy = require("./delete.js")

module.exports = { 
    index, 
    new: newCartoon,
    show,
    create,
    edit,
    update,
    destroy
};
