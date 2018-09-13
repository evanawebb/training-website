const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

var Horse = require('../models/horses')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/horse', (req, res) => {
  res.send(
    [{
      title: 'Hello World!',
      description: 'Hi there! How are you?'
    }]
  )
})

app.listen(process.env.PORT || 8081)

// access to mongo
var mongoose = require('mongoose')

// access credentials from env file
var uri = process.env.MONGO_CONNECT_HORSES

mongoose.connect(uri, {useNewUrlParser: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection Succeeded')
})

app.post('/horse', (req, res) => {
  var db = req.db
  var title = req.body.title
  var description = req.body.description
  var newHorse = new Horse({
    title: title,
    description: description
  })

  newHorse.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Horse added successfully!'
    })
  })
})
