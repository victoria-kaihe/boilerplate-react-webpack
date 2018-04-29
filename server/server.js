const path = require('path')
const express = require('express')

const server = express()

server.use(express.static(path.join(__dirname, './public')))
server.use(express.json())

module.exports = server
