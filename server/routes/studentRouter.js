const Router = require('express')
const studentRouter = new Router()
const studentController = require('../controllers/studentController')

studentRouter.post('/', studentController.create)
studentRouter.get('/', studentController.getAll)
studentRouter.get('/:id', studentController.getOne)
studentRouter.put('/:id', studentController.update)
studentRouter.delete('/:id', studentController.delete)

module.exports = studentRouter