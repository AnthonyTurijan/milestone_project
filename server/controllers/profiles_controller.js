// DEPENDENCIES
const profiles = require('express').Router()
const db = require('../models')
const {Profiles} = db 
const { Op } = require('sequelize')

// FIND ALL USERS
profiles.get('/', async (req, res) => {
    try {
       console.log('>>GET ALL PROFILES>>')
       const foundProfiles = await Profiles.findAll(
           {
        //    order: [ [ 'user_id', 'ASC' ] ]
        //    ,
        //    where: {
        //     user_id: { [Op.like]: `%${req.params.name ? req.params.name : ''}%` }
        //    }
       }
       )
       res.status(200).json(foundProfiles)
       } 
       catch (error) {
       res.status(500).json(error)
   }
})

profiles.get('/:name', async (req, res) => {
    console.log('>>GET A SPECIFIC PROFILES>>')
    try {
        console.log('>>GET SPECIFIC USERS>>', req.params.name)
        const foundProfiles = await Profiles.findOne({
            where: { profile_id:  req.params.name },
        })

        res.status(200).json(foundProfiles)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Create Profile
profiles.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newProfile = await Profiles.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newProfile
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A USER
profiles.put('/:id', async (req, res) => {
    try {
        console.log(req.body, req.params.id)
        const updatedProfiles = await Profiles.update(req.body, {
            where: {
                profile_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedProfiles} Events(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})



// DELETE A PROFILE
profiles.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const deletedProfiles = await Profiles.destroy({
            where: {
                profile_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedProfiles} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


module.exports = profiles;