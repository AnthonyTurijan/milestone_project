// DEPENDENCIES
const comments = require('express').Router()
const db = require('../models')
const { Comments } = db 
const { Op } = require('sequelize')

// FIND ALL USERS
comments.get('/', async (req, res) => {
     try {
        console.log('>>>>', req.params.name)
        const foundComments = await Comments.findAll(
            {
            order: [ [ 'time_posted', 'DESC' ] ],
            include: [ {
                model: Users,
                as: 'users'
            } 
            ]

            }
        )
        res.status(200).json(foundComments)
    } catch (error) {
        res.status(500).json(error)
    }
})


// EXPORT
module.exports = comments