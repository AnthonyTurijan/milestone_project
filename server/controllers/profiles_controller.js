// DEPENDENCIES
const profiles = require('express').Router()
const db = require('../models')
const {Profiles} = db 
const { Op } = require('sequelize')


module.exports = profiles;