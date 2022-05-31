//DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')

//REQUIRE DOTENV
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//CONFIGURATION


//LISTEN
app.listen(process.env.PORT,()=>{
    console.log('Im On')
})