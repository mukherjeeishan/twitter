const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('../../knexfile') [env]