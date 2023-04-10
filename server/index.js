require('dotenv').config()
const express = require('express')
const sequelize = require('./database')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

// Express app port
const PORT = process.env.PORT || 5000

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Main router
app.use("/api", router)

const start = async () => {
    try {
        // Database connection
        await sequelize.authenticate()
        await sequelize.sync()
        // App start
        app.listen(PORT, () => console.log(`🚀 Server started on port = ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()