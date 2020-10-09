const mongoose = require('mongoose')

const Schema = mongoose.Schema

const musicSchema = new Schema({
  name: String,
  message: String,
  category: String,
  url: String,
})

module.exports = mongoose.model('Music', musicSchema)
