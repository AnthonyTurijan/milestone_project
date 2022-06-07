// DEPENDENCIES
const comments = require('express').Router()
const db = require('../models')
const { Comments } = db 
const { Op } = require('sequelize')

// FIND ALL comments
comments.get('/', async (req, res) => {
     try {
        console.log('>>>>', req.params.name)
        const foundComments = await Comments.findAll(
            {
             }
        )
        res.status(200).json(foundComments)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Find all comments
comments.get('/:id', async (req, res) => {
    console.log('>>GET A SPECIFIC Comments>>')
    try {
        console.log('>>GET SPECIFIC Comments>>', req.params.id)
        const foundComments = await Comments.findOne({
            where: { profile_id:  req.params.id },
        })

        res.status(200).json(foundComments)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE A COMMENTS
comments.post('/', async (req, res) => {
    try {
        console.log(req.body)
        const newComments = await Comments.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new event',
            data: newComments
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A COMMENT
comments.put('/:id', async (req, res) => {
    try {
        console.log(req.body, req.params.id)
        const updatedComments = await Comments.update(req.body, {
            where: {
                comment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedComments} Events(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// DELETE A COMMENT
comments.delete('/:id', async (req, res) => {
    try {
        console.log(req.params.id)
        const deletedComments = await Comments.destroy({
            where: {
                comment_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedComments} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


// EXPORT
module.exports = comments