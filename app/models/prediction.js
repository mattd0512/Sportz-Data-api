const mongoose = require('mongoose')

const predictionSchema = new mongoose.Schema({
  winner: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  favPlayer: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Prediction', predictionSchema)
