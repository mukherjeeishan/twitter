const connection = require ('./connection')

function getTweets(test, testDb) {
    const db = testDb || connection

    return db('tweets').join('users', 'tweets.user_id', 'users.id').select('*', 'tweets.id AS id')
    .then (tweets => {
        return tweets.map(tweet => {
           
            tweet.user = {
                username: tweet.username,
                id:tweet.user_id
            }
            delete tweet.username
            delete tweet.user_id
            return tweet
            
        })
    })
}

function createTweets(tweet, testDb) {
    const db = testDb || connection 
    return db('tweets').insert(tweet) 
}

function getTweetsByUsername(username, testDb) {
    const db = testDb || connection
    
    
    // Two step query
    return db('users').where('username', username).first().then(user => {
    return db('tweets').where('user_id', user.id)

    .then (tweets => {
        return tweets.map(tweet => {
           
            tweet.user = {
                username: user.username,
                id:tweet.user_id
            }
            delete tweet.user_id
            return tweet
            
        })
    })
    })
    
}

module.exports = {
    getTweets,
    createTweets,
    getTweetsByUsername
}