
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HorseSchema = new Schema({
  photo: String,
  title: String,
  description: String
})

var Horse = mongoose.model('Horse', HorseSchema)
module.exports = Horse
