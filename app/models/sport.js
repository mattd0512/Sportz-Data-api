const mongoose = require('mongoose')

const sportSchema = new mongoose.Schema(
    {
        conference: {
            type: String,
            required: true,
        },
        division: {
            type: String,
            required: true,
        },
        league: {
            type: String,
            required: true,
        },
    }
)

module.exports = mongoose.model('Sport', sportSchema)