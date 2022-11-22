// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

const Sport = require('../models/sport')

const User = require('../models/user')

const apiKey = require('../APIKey')

const axios = require('axios')

const customErrors = require('../../lib/custom_errors')

const handle404 = customErrors.handle404

const router = express.Router()

// NFL Homepage
router.get('/NFL', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
        params: {league: "NFL"},
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

// NBA Homepage
router.get('/NBA', (req, res) => {
	axios({
        method: "GET",
		url: 'https://sportspage-feeds.p.rapidapi.com/conferences',
        params: {league: "NBA"},
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