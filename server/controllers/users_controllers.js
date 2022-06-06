// DEPENDENCIES
const users = require('express').Router()
const db = require('../models')
const { Users } = db 
const { Op } = require('sequelize')

// FIND ALL USERS
users.get('/', async (req, res) => {
     try {
        console.log('>>>>', req.params.name)
        const foundUsers = await Users.findAll(
            {
            order: [ [ 'event_time', 'ASC' ] ]
                ,
            where: {
                event_time: { [Op.like]: `%${req.params.name ? req.params.name : ''}%` }
            }
        }
        )
        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})


// EXPORT
module.exports = Users