//local settings
const DB_USER='react'
const DB_PASSWORD='react123'
const DB_HOST='localhost'
const DB_PORT=5432
const DB_DATABASE='react'

const Pool = require('pg').Pool
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction
})

module.exports = { pool }