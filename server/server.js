//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

//REQUIRE DOTENV
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Socailizr'
    })
})

const eventsController = require('./controllers/events_controller')
app.use('/events', eventsController)

//LISTEN
app.listen(process.env.PORT, () => {
console.log(`Server listening on ${process.env.PORT}`);
});