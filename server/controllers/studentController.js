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

    async update(req, res, next) {
        try {
            const {id} = req.params

            if (!id) {
                return next(ApiError.badRequest("Некорректный ID студента"))
            }

            const {fio, group} = req.body
            if (!fio || !group) {
                return next(ApiError.badRequest("Некорректные новые значения ФИО и группы"))
            }

            const candidate = await Student.findOne({where: {id}})
            if (!candidate) {
                return next(ApiError.badRequest("Студента с таким ID не существует"))
            }

            const updatedStudent = await Student.update({fio, group}, {where: {id}})
            return res.json(updatedStudent)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {id} = req.params

            if (!id) {
                return next(ApiError.badRequest("Некорректный ID студента"))
            }

            const candidate = await Student.findOne({where: {id}})
            if (!candidate) {
                return next(ApiError.badRequest("Студента с таким ID не существует"))
            }

            const deletedStudent = await candidate.destroy()
            return res.json(deletedStudent)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new StudentController()