const express = require('express')
const path = require('path')
const mainRouter = express.Router()
const port = 3000

mainRouter.get('/', function (req, res) {
  res.send('Hello Universe!,Im a Node app')
})

// Create a route(/about)
mainRouter.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

module.exports = mainRouter
