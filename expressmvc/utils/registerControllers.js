const cartoonRoutes = require("../routes/cartoon")

function registerControllers(app){
    app.use("/cartoon", cartoonRoutes)
}

module.exports = registerControllers