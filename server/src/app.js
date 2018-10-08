const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
require('dotenv').config()

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

// access to mongo
var mongoose = require('mongoose')

// access credentials from env file
var uri = process.env.MONGO_CONNECT_HORSES

mongoose.connect(uri, {useNewUrlParser: true})
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  console.log('Connection Succeeded')
})

// require mongoose schema
var Horse = require('../models/horses')
// var User = require('./models/Users')

// horse get, post, and delete methods

// get all horses
app.get('/horses', (req, res) => {
  Horse.find({}, function (error, horses) {
    if (error) { console.error(error) }
    res.send(
      { Horse: horses })
  }).sort({_id: -1})
})

// Add new horse
app.post('/horses', (req, res) => {
  console.log(req.body)
  var db = req.db
  // var name = req.body.name
  // var description = req.body.description
  // var photo = req.body.photo
  // var video = req.body.video
  var newHorse = new Horse({
    name: req.body.name,
    description: req.body.description,
    photo: req.body.photo,
    video: req.body.video
  })
  newHorse.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    })
  })
})
