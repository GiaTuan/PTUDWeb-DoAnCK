var pg = require('pg')
var config = {
    user:  process.env.DB_USER || process.env.HEROKU_DB_USER,
    database: process.env.DB_NAME || process.env.HEROKU_DB_NAME,
    password: process.env.DB_PASSWORD || process.env.HEROKU_DB_PASSWORD,
    host: process.env.DB_HOST || process.env.HEROKU_DB_HOST,
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}
var pool = new pg.Pool(config);
module.exports = pool;
