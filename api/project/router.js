// build your `/api/projects` router here
const express = require('express')
const router = express.Router()

const Projects = require('./model')

router.post('/', (req, res) => {
    Projects.insert(req.body)
        .then(project => {
            res.json(project)
        })
})

router.get('/', (req, res) => {
    Projects.get()
        .then(projects => {
            res.json(projects)
        })
})
module.exports = router