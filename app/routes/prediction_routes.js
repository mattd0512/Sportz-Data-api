const express = require('express')
const passport = require('passport')

const Game = require('../models/game')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const game = require('../models/game')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

router.post('/predictions/:gameId', removeBlanks, (req, res, next) => {
    const prediction = req.body.prediction
    const gameId = req.params.gameId
    Game.findById(gameId)
        .then(handle404)
        .then(pet => {
            game.predictions.push(prediction)

            return game.save()
        })
        .then(game => res.status(201).json({ game: game }))
        .catch(next)
})

router.patch('/predictions/:gameId/:predictionId', requireToken, removeBlanks, (req, res, next) => {
    const { gameId, predictionId } = req.params

    Game.findById(gameId)
        .then(handle404)
        .then(game => {
            const thePrediction = game.predictions.id(predictionId)
            requireOwnership(req, game)
            thePrediction.set(req.body.prediction)
            
            return prediction.save()
        })
        .then(game => res.sendStatus(204))
        .catch(next)
})

router.delete('/predictions/:gameId/:toyId', requireToken, (req, res, next) => {
    const { gameId, predictionId } = req.params

    Game.findById(petId)
        .then(handle404)
        .then(game => {
            const thePrediction = game.predictions.id(predictionId)

            requireOwnership(req, game)

            thePrediction.remove()

            return game.save()
        })
        .then(pet => res.sendStatus(204))
        .catch(next)
})

module.exports = router