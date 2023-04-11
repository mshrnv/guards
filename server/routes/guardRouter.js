const Router = require('express')
const guardRouter = new Router()
const guardController = require('../controllers/guardController')

guardRouter.post('/', guardController.create)
guardRouter.get('/', guardController.getAll)
guardRouter.get('/:id', guardController.getOne)
guardRouter.put('/:id', guardController.update)
guardRouter.delete('/:id', guardController.delete)

module.exports = guardRouter