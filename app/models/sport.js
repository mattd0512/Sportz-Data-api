const mongoose = require('mongoose')

const sportSchema = new mongoose.Schema({
    team: {
        type: String,
        requires: true,
    },
    conference: {
        type: String,
        required: true,
    },
    gameId: {
        type: String,
        required: true,
    },
    homeOdds: {
        type: Number,
        required: true,
    },
    awayOdds: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('Sport', sportSchema)