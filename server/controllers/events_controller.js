// DEPENDENCIES
const events = require('express').Router()
const db = require('../models')
const {Events} = db 
const { Op } = require('sequelize')

// FIND ALL EVENTS
events.get('/', async (req, res) => {
     try {
        console.log('>>>>', req.query.name)
        const foundEvents = await Events.findAll(
            {
            order: [ [ 'event_time', 'ASC' ] ]
            ,
            where: {
                event_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        }
        )
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})


// FIND A SPECIFIC EVENTS
events.get(`/:name`, async (req, res) => {
    try {
        console.log('>>>>', req.query.name)
        const foundEvents = await events.findAll({
            where: { event_name: req.params.name }//,
            // include: [
            //     { 
            //         model: profile, 
            //         as: "profiles", 
            //         attributes: { exclude: ["profile_id", "event_id"] },
            //         include: { 
            //             model: Events, 
            //             as: "events", 
            //             where: { event_name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` } } 
            //         }
            //     }
            // ]
            //,
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


// // CREATE A BAND
// bands.post('/', async (req, res) => {
//     try {
//         const newBand = await Band.create(req.body)
//         res.status(200).json({
//             message: 'Successfully inserted a new band',
//             data: newBand
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// // UPDATE A EVENT
// bands.put('/:id', async (req, res) => {
//     try {
//         const updatedBands = await Band.update(req.body, {
//             where: {
//                 band_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully updated ${updatedBands} band(s)`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// DELETE A BAND
// bands.delete('/:id', async (req, res) => {
//     try {
//         const deletedBands = await Band.destroy({
//             where: {
//                 band_id: req.params.id
//             }
//         })
//         res.status(200).json({
//             message: `Successfully deleted ${deletedBands} band(s)`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// EXPORT
module.exports = events