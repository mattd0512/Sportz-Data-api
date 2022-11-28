const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
    team: {
        type: String,
        required: true,
    },
    conference: {
        type: String,
        required: true,
    },
    league: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model('Team', teamSchema)