// build your `/api/resources` router here
const express = require('express')
const router = express.Router()

const Resources = require('./model')

router.post('/', (req, res) => {
    Resources.insert(req.body)
        .then(resource => {
            res.json(resource)
        })
})

router.get('/', (req, res) => {
    Resources.get()
        .then(resources => {
            res.json(resources)
        })
})
module.exports = router