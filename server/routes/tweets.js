const express = require('express')
const router = express.Router()


// GET /api/v1/tweets
router.get('/', (req, res) => {
res.json([
    {
        id: 5,
        text: 'This is a tweet'
    }
])
})

// POST /api/v1/tweets
router.get('/', (req, res) => {
    res.json({ id: 5 })

})

// GET /api/v1/tweets/:username
router.get('/:username', (req, res) => {
    res.json([
        {
            id: 5,
            text: 'This is a tweet'
        }
    ])
})

module.exports = router