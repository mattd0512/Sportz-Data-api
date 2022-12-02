// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

const User = require('../models/user')

const apiKey = require('../APIKey')

const requireToken = passport.authenticate('bearer', { session: false })

const axios = require('axios')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const router = express.Router()


const Game = require('../models/game')  

router.get('/nfl/games', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/games',
        params: {league: 'nfl'},
        headers: {
            'X-RapidAPI-Key': 'e654759496msh635638a99679754p17ffeejsn007998d740cd',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
        }
	})
        .then(handle404)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

router.get('/nba/games', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/games',
        params: {league: 'nba'},
        headers: {
            'X-RapidAPI-Key': 'e654759496msh635638a99679754p17ffeejsn007998d740cd',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
        }
	})
        .then(handle404)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

router.get('/mlb/games', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/games',
        params: {league: 'mlb'},
        headers: {
            'X-RapidAPI-Key': 'e654759496msh635638a99679754p17ffeejsn007998d740cd',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
        }
	})
        .then(handle404)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

router.get('/nhl/games', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/games',
        params: {league: 'nhl'},
        headers: {
            'X-RapidAPI-Key': 'e654759496msh635638a99679754p17ffeejsn007998d740cd',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
        }
	})
        .then(handle404)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

router.get('/ncaaf/games', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/games',
        params: {league: 'ncaaf'},
        headers: {
            'X-RapidAPI-Key': 'e654759496msh635638a99679754p17ffeejsn007998d740cd',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
        }
	})
        .then(handle404)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

router.get('/ncaab/games', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/games',
        params: {league: 'ncaab'},
        headers: {
            'X-RapidAPI-Key': 'e654759496msh635638a99679754p17ffeejsn007998d740cd',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com'
        }
	})
        .then(handle404)
		.then(response => {
			res.status(200).json(response.data);
		})
		.catch((err) => {
			res.status(500).json({ message: err });
		});
});

// PATCH (NFL)
router.patch('/nfl/games/mybookmarks/:gameId', (req, res, next) => {
    delete req.body.game.owner

    const gameId = req.params.gameId
    const userId = req.user.id

    User.findbygameId(gameId)
        .then(handle404)
        .then(user => {
            if(!user.myGames.includes(gameId)) {
                user.myGames.push(gameId)
                user.save()
                return user 
            }
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
    })

router.patch('/nfl/games/mylibrary/remove/:gameId', (req, res, next) => {

    const gameId = req.params.gameId
    const userId = req.user.id
        
        User.findbyId(userId)
            .then(handle404)
            .then(user => {
                const myGames = user.myGames.slice()
                const ind = myGames.indexOf(gameId)
                if (ind > -1) {
                    myGames.splice(ind, 1)
                }
                user.myGames = myGames
                user.save()
                return user
            })
            .then((user) => res.status(201).json({ user: user }))
                .catch(next)
    })

// PATCH (NBA)
router.patch('/nba/games/mylibrary/:gameId', (req, res, next) => {
    delete req.body.game.owner

    const gameId = req.params.gameId
    const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            if(!user.myGames.includes(gameId)) {
                user.myGames.push(gameId)
                user.save()
                return user 
            }
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
    })

router.patch('/nba/games/mylibrary/remove/:gameId', (req, res, next) => {

const gameId = req.params.gameId
const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            const myGames = user.myGames.slice()
            const ind = myGames.indexOf(gameId)
            if (ind > -1) {
                myGames.splice(ind, 1)
            }
            user.myGames = myGames
            user.save()
            return user
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
})

// PATCH (MLB)
router.patch('/mlb/games/mylibrary/:gameId', (req, res, next) => {
    delete req.body.game.owner

    const gameId = req.params.gameId
    const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            if(!user.myGames.includes(gameId)) {
                user.myGames.push(gameId)
                user.save()
                return user 
            }
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
    })

router.patch('/mlb/games/mylibrary/remove/:gameId', (req, res, next) => {

const gameId = req.params.gameId
const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            const myGames = user.myGames.slice()
            const ind = myGames.indexOf(gameId)
            if (ind > -1) {
                myGames.splice(ind, 1)
            }
            user.myGames = myGames
            user.save()
            return user
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
})

// PATCH (NHL)
router.patch('/nhl/games/mylibrary/:gameId', (req, res, next) => {
    delete req.body.game.owner

    const gameId = req.params.gameId
    const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            if(!user.myGames.includes(gameId)) {
                user.myGames.push(gameId)
                user.save()
                return user 
            }
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
    })

router.patch('/nhl/games/mylibrary/remove/:gameId', (req, res, next) => {

const gameId = req.params.gameId
const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            const myGames = user.myGames.slice()
            const ind = myGames.indexOf(gameId)
            if (ind > -1) {
                myGames.splice(ind, 1)
            }
            user.myGames = myGames
            user.save()
            return user
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
})

// PATCH (NCAAF)
router.patch('/ncaaf/games/mylibrary/:gameId', (req, res, next) => {
    delete req.body.game.owner

    const gameId = req.params.gameId
    const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            if(!user.myGames.includes(gameId)) {
                user.myGames.push(gameId)
                user.save()
                return user 
            }
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
    })

router.patch('/ncaaf/games/mylibrary/remove/:gameId', (req, res, next) => {

const gameId = req.params.gameId
const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            const myGames = user.myGames.slice()
            const ind = myGames.indexOf(gameId)
            if (ind > -1) {
                myGames.splice(ind, 1)
            }
            user.myGames = myGames
            user.save()
            return user
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
})

// PATCH (NCAAB)
router.patch('/ncaab/games/mylibrary/:gameId', (req, res, next) => {
    delete req.body.game.owner

    const gameId = req.params.gameId
    const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            if(!user.myGames.includes(gameId)) {
                user.myGames.push(gameId)
                user.save()
                return user 
            }
        })
        .then((user) => res.status(201).json({ user: user }))
        .catch(next)
    })

router.patch('/ncaab/games/mylibrary/remove/:gameId', (req, res, next) => {

const gameId = req.params.gameId
const userId = req.user.id

    User.findbyId(userId)
        .then(handle404)
        .then(user => {
            const myGames = user.myGames.slice()
            const ind = myGames.indexOf(gameId)
            if (ind > -1) {
                myGames.splice(ind, 1)
            }
            user.myGames = myGames
            user.save()
            return user
        })
        .then((user) => res.status(201).json({ user:ser }))
        .catch(next)
})

module.exports = router

