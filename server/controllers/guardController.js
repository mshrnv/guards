const ApiError = require("../error/ApiError")
const {Guard, Type, StudentGuard, Role, TypeRole, Student} = require("../models/models")

class GuardController {
    async create(req, res, next) {
        try {
            const {date, typeId} = req.body

            if (!date || !typeId) {
                return next(ApiError.badRequest("Некорректная дата или тип"))
            }

            const candidate = await Guard.findOne({where: {date, typeId}})
            if (candidate) {
                return next(ApiError.badRequest('Наряд уже существует'))
            }

            const guard = await Guard.create({date, typeId})
            return res.json(guard)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res, next) {
        try {
            const {id, date} = req.query

            if (id) {
                const guards = await Guard.findOne({where: {id}, include: [Type]})
                return res.json(guards)
            }

            if (date) {
                const guards = await Guard.findAll({where: {date}, include: [Type]})
                return res.json(guards)
            }

            const guards = await Guard.findAll({include: [Type]})
            return res.json(guards)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
    async getOne(req, res, next) {
        try {
            const {id} = req.params

            if (!id) {
                return next(ApiError.badRequest("Некорректный ID наряда"))
            }

            const guard = await Guard.findOne({where: {id}, include: [
                    {model: StudentGuard, include: [
                            {model: Student}
                        ]},
                    {model: Type, include: [
                            {model: TypeRole, include: [
                                    {model: Role},
                                ]}
                        ]}
                ]})

            if (!guard) {
                return next(ApiError.badRequest("Наряда с таким ID не существует"))
            }

            return res.json(guard)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const {id} = req.params

            if (!id) {
                return next(ApiError.badRequest("Некорректный ID наряда"))
            }

            const {date, typeId} = req.body
            if (!date || !typeId) {
                return next(ApiError.badRequest("Некорректные новые значения даты и типа"))
            }

            const candidate = await Guard.findOne({where: {id}})
            if (!candidate) {
                return next(ApiError.badRequest("Наряда с таким ID не существует"))
            }

            const updatedGuard = await Guard.update({date, typeId}, {where: {id}})
            return res.json(updatedGuard)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try {
            const {id}  = req.params

            if (!id) {
                return next(ApiError.badRequest("Некорректный ID наряда"))
            }

            const candidate = await Guard.findOne({where: {id}})
            if (!candidate) {
                return next(ApiError.badRequest("Наряда с таким ID не существует"))
            }

            const deletedGuard = await candidate.destroy()
            return res.json(deletedGuard)
        } catch (e) {
            return next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new GuardController()