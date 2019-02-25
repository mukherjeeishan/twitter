const express = require('express')
const server = express()
const path = require('path')


const tweetRoutes =require('./routes/tweets')


server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())


server.use('/api/v1/tweets', tweetRoutes)

server.use('/api/v1/tweets', tweetRoutes)

module.exports = server