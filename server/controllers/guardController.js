class GuardController {
    async create(req, res) {}
    async getAll(req, res) {}
    async getOne(req, res) {
        res.json({message: `Наряд с ID = ${req.params.id}`})
    }

    // TODO: Delete, Update
}

module.exports = new GuardController()