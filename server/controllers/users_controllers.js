// DEPENDENCIES
const users = require('express').Router()
const db = require('../models')
const { Users } = db 
const { Op } = require('sequelize')

// FIND ALL USERS
users.get('/', async (req, res) => {
     try {
        console.log('>>GET ALL USERS>>')
        const foundUsers = await Users.findAll(
            {
            order: [ [ 'updatedAt', 'ASC' ] ]
            ,
            where: {
                user_name: { [Op.like]: `%${req.params.name ? req.params.name : ''}%` }
            }
        }
        )
        res.status(200).json(foundUsers)
        } 
        catch (error) {
        res.status(500).json(error)
    }
})


users.get('/:name', async (req, res) => {
    console.log('>>GET A SPECIFIC USERS>>')
    try {
        console.log('>>GET SPECIFIC USERS>>', req.params.name)
        const foundUsers = await Users.findOne({
            where: { 
                user_name: { [Op.like]: `%${req.params.name ? req.params.name : ''}%` } 
            },
        })

        res.status(200).json(foundUsers)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Create User
users.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newUser = await Users.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newUser
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A USER
users.put('/:id', async (req, res) => {
    try {
        console.log(req.body, req.params.id)
        const updateduser = await Users.update(req.body, {
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updateduser} Events(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
users.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const deletedUsers = await Users.destroy({
            where: {
                user_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedUsers} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})






// EXPORT
module.exports = users