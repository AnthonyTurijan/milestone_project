// DEPENDENCIES
const bands = require('express').Router()
const db = require('../models')
const { Events} = db 
const { Op } = require('sequelize')

// FIND ALL Events
Events.get('/', async (req, res) => {
    try {
        const foundEvent = await Events.findAll({
            order: [ [ '', 'ASC' ] ],
            where: {
                name: { [Op.like]: `%${req.query.event_name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundEvent)
        console.log(foundEvent)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


// FIND A SPECIFIC EVENTS
// bands.get('/:name', async (req, res) => {
//     try {
//         const foundBand = await Band.findOne({
//             where: { name: req.params.name },
//             include: [
//                 { 
//                     model: MeetGreet, 
//                     as: "meet_greets", 
//                     attributes: { exclude: ["band_id", "event_id"] },
//                     include: { 
//                         model: Event, 
//                         as: "event", 
//                         where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } } 
//                     }
//                 },
//                 { 
//                     model: SetTime, 
//                     as: "set_times",
//                     attributes: { exclude: ["band_id", "event_id"] },
//                     include: { 
//                         model: Event, 
//                         as: "event", 
//                         where: { name: { [Op.like]: `%${req.query.event ? req.query.event : ''}%` } } 
//                     }
//                 }
//             ],
//             order: [
//                 [{ model: MeetGreet, as: "meet_greets" }, { model: Event, as: "event" }, 'date', 'DESC'],
//                 [{ model: SetTime, as: "set_times" }, { model: Event, as: "event" }, 'date', 'DESC']
//             ]
//         })
//         res.status(200).json(foundBand)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })




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
module.exports = bands