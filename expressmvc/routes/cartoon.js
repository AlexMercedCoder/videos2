const Router = require("express").Router
const controller = require("../controllers/cartoon")

const router = Router()

// my routes (INDUCES)

// index
router.get("/", controller.index)

// new
router.get("/new", controller.new)

// destory
router.delete("/:id", controller.destroy)

// update
router.put("/:id", controller.update)

// create
router.post("/", controller.create)

// edit
router.get("/:id/edit", controller.edit)

// show
router.get("/:id", controller.show)

module.exports = router