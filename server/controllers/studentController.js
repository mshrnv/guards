const ApiError = require("../error/ApiError");
const {Student} = require("../models/models")

class StudentController {
    async create(req, res, next) {
        try {
            const {fio, group} = req.body

            if (!fio || !group) {
                return next(ApiError.badRequest("Некорректое ФИО или группа"))
            }

            const candidate = await Student.findOne({where: {fio}})
            if (candidate) {
                return next(ApiError.badRequest('Студент с таким именем уже существует'))
            }

            const student = await Student.create({fio, group})
            return res.json(student)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res, next) {
        try {
            const students = await Student.findAll()
            return res.json(students)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params

            if (!id) {
                return next(ApiError.badRequest("Некорректный ID студента"))
            }

            const student = await Student.findOne({where: {id}})

            if (!student) {
                return next(ApiError.badRequest("Студента с таким ID не существует"))
            }

            return res.json(student)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    // TODO: Delete, Update
}

module.exports = new StudentController()