const mongoose = require('mongoose')

const sportSchema = new mongoose.Schema({
    summary: {
        type: String,
        required: true,
    },
    teams: {
        type: String,
        required: true,
    },
    scoreboard: {
        type: Number,
        required: true,
    },
    odds: {
        type: Number,
        required: true,
    },
    gameId: {
        type: String,
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

module.exports = mongoose.model('Sport', sportSchema)