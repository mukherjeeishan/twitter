const express = require('express')
const router = express.Router()
const { getTweets, getTweetsByUsername, createTweet } = require('../db/tweets')


// GET /api/v1/tweets
router.get('/', (req, res) => {
    getTweets()
    .then(tweets => {
        res.json(tweets)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// POST /api/v1/tweets
router.post('/:username', (req, res) => {
    console.log('new tweet for', req.params.username, req.body.text)
    
    const tweet = {
        username: req.params.username,
        text: req.body.text
    }

    createTweet(tweet)
    .then(([id]) => {
        res.json({ id })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })

})

// GET /api/v1/tweets/:username
router.get('/:username', (req, res) => {
    getTweetsByUsername(req.params.username)
    .then(tweets => {
        res.json(tweets)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
    
})

module.exports = router