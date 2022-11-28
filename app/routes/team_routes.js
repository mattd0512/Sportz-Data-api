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

router.get('/nfl/teams', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/teams',
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

router.get('/nba/teams', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/teams',
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

router.get('/mlb/teams', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/teams',
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

router.get('/nhl/teams', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/teams',
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

router.get('/ncaaf/teams', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/teams',
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

router.get('/ncaab/teams', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/teams',
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

module.exports = router