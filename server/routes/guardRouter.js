const Router = require('express')
const guardRouter = new Router()
const guardController = require('../controllers/guardController')

guardRouter.post('/', guardController.create)
guardRouter.get('/', guardController.getAll)
guardRouter.get('/:id', guardController.getOne)

module.exports = guardRouter