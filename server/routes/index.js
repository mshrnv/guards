const Router = require('express')
const router = new Router()

const studentRouter = require('./studentRouter')
const guardRouter = require('./guardRouter')

// Routes
router.use("/student", studentRouter)
router.use("/guard", guardRouter)

module.exports = router