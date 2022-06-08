// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const {Events} = db 
const { Op } = require('sequelize')
const profiles = require('../models/profiles')

// FIND ALL EVENTS
events.get('/', async (req, res) => {
    try {
       console.log('>>GET ALL EVENTS>>', req.params.name)
       const foundEvents = await Events.findAll(
        {
            order: [ [ 'time_posted', 'ASC' ] ]
           ,
           where: { event_name: { [Op.like]: `%${req.params.name ? req.params.name : ''}%` },

        //    include: [
        //     { 
        //         model: Users, 
        //         as: "users", 
        //         //attributes: { exclude: [ "event_id", "band_id" ] },
        //         // include: {
        //         //      model: profiles, 
        //         //      as: "profiles", 
        //         // } 
        //     }]
        },

        attributes: { exclude: [ "user_name", "profile_id" ] },
        
       }
       )
       res.status(200).json(foundEvents)
   } 
   catch (error) {
       res.status(500).json(error)
   }
})

// FIND A SPECIFIC EVENTS
events.get('/:name', async (req, res) => {
    console.log('>>GET A SPECIFIC EVENTS>>')
    try {
        console.log('>>GET SPECIFIC EVENTS>>', req.params.name)
        const foundEvent = await Events.findOne({
            where: { 
                event_name: { [Op.like]: `%${req.params.name ? req.params.name : ''}%` } 
            },
        }
        )

        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A EVENTS
events.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newEvent = await Events.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newEvent
        })
        res.redirect('/events')
    } catch(err) {
        res.status(500).json(err)
    }
})

// // UPDATE A EVENT
events.put('/:id', async (req, res) => {
    try {
        console.log(req.body, req.params.id)
        const updatedEvents = await Events.update(req.body, {
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedEvents} Events(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
events.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const deletedEvent = await Events.destroy({
            where: {
                event_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedEvent} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// EXPORT
module.exports = events