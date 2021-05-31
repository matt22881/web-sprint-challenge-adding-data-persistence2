// build your server here and require it from index.js
const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const taskRouter = require('./task/router')
const resourceRouter = require('./resource/router')
const projectRouter = require('./project/router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the API</h1>')
})
module.exports = server