
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var HorseSchema = new Schema({
  name: String,
  photo: String,
  video: String,
  description: String
})

var Horse = mongoose.model('Horse', HorseSchema)
module.exports = Horse
