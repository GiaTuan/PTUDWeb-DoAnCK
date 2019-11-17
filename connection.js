var pg = require('pg');
var config = {
    user: 'ltqyphnyxyngak',
    database: 'd6avage3qh97lr',
    password: 'f531b1f137c728d9f610dec5adce9deda30bb21dd4fc7c0bcc75febf05061aa0',
    host: 'ec2-107-20-167-241.compute-1.amazonaws.com',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000,
}
var pool = new pg.Pool(config);
module.exports=pool;
