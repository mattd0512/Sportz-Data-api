// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

const apiKey = require('../APIKey')

const requireToken = passport.authenticate('bearer', { session: false })

const axios = require('axios')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const router = express.Router()


// NFL Homepage
router.get('/nfl', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
        params: {league: 'nfl'},
        headers: {
            'X-RapidAPI-Key': 'e654759496msh635638a99679754p17ffeejsn007998d740cd',
            'X-RapidAPI-Host': 'sportspage-feeds.p.rapidapi.com',
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

// NBA HOMEPAGE
router.get('/nba', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
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

// MLB HOMEPAGE
router.get('/mlb', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
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

// NHL HOMEPAGE
router.get('/nhl', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
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

// NCAAF HOMEPAGE
router.get('/ncaaf', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
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

// NCAAB HOMEPAGE
router.get('/ncaab', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
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

// 
// router.get('sports/myteams/:apiId', requireToken, (req, res, next) => {
//     const apiId = req.params.apiId
//     const userId = req.user.id
//     addTeam(apiId)
//     User.findById(userId)
//         .then(handle404)
//         .then(user => {
//             if(!user.myTeams.includes(apiId)) {
//                 user.myTeams.push(apiId)
//                 user.save()
//                 return user
//             }
//         })
//         .then((user) => res.status(201).json({ user: user }))
//         .catch(next)
// })

// router.patch('/sports/myteams/remove/:apiId', requireToken, (req, res, next) => {
//     const apiId = req.params.apiId
//     const userId = req.user.id
//     User.findById(userId)
//         .then(handle404)
//         .then(user => {
//             const myTeams = user.myTeams.slice()
//             const ind = myTeams.indexOf(apiId)
//             if (ind > -1) {
//                 myTeams.splice(ind, 1)
//             }
//             user.myTeams = myTeams
//             user.save()
//             return user
//         })
//         .then((user) => res.status(201).json({ user: user }))
//         .catch(next)
// })



module.exports = router