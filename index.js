// start your server here
require('dotenv').config()
const server = require('./api/server')

const PORT = process.env.PORT || 5555

server.listen(PORT => {
    console.log(`\n --- API Server listening on port ${PORT} --- \n`)
})