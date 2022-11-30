const mongoose = require('mongoose')

const faveTeamSchema = new mongoose.Schema(
    {
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
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('faveTeam', faveTeamSchema)