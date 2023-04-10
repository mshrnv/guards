const Router = require('express')
const guardRouter = new Router()

guardRouter.get('/')
guardRouter.get('/:id')

module.exports = guardRouter