//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

//REQUIRE DOTENV
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Socailizr'
    })
})

// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));


const eventsController = require('./controllers/events_controllers')
app.use('/events', eventsController)
const usersController = require('./controllers/users_controllers')
app.use('/users', usersController)
const commentsController = require('./controllers/comments_controllers')
app.use('/comments', commentsController)
const profilesController = require('./controllers/profiles_controller')
app.use('/profiles', profilesController)

//LISTEN
app.listen(process.env.PORT, () => {
console.log(`Server listening on ${process.env.PORT}`);
});