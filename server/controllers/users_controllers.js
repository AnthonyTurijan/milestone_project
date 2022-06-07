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

// FIND A SPECIFIC USERS
users.get('/:name', async (req, res) => {
    try {
        console.log('>>GET A SPECIFIC USERS>>', req.query.name)
        const foundUsers = await Users.findAll({
            //     order: [ [ 'updatedAt', 'ASC' ] ]
            //    ,
               where: {
                user_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
               }
           //,
            // include: [
            //     { 
            //         model: Users, 
            //         as: "users", 
            //         attributes: { exclude: ["profile_id", "event_id"] },
            //         include: { 
            //             model: Users, 
            //             as: "users", 
            //             where: { event_name: { [Op.like]: `%${req.params.name ? req.params.name : ''}%` } } 
            //         }
            //     }
            // ]
            // ,
            // order: [
            //     [{ model: MeetGreet, as: "meet_greets" }, { model: Event, as: "event" }, 'date', 'DESC'],
            //     [{ model: SetTime, as: "set_times" }, { model: Event, as: "event" }, 'date', 'DESC']
            // ]
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

// EXPORT
module.exports = users