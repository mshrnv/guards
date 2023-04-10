const Router = require('express')
const studentRouter = new Router()

studentRouter.get('/', (req, res) => {
    res.json({data: ['Список студентов']})
})
studentRouter.get('/:id')

module.exports = studentRouter