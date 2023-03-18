
const knex = require('knex')({
    client: process.env.DATABASE_ENGINE         || 'mysql',
    connection: {
    	database: process.env.DATABASE_NAME     || 'boilerplate',
        host: process.env.DATABASE_HOST         || '127.0.0.1',
        user: process.env.DATABASE_USERNAME     || 'ankit',
        password: process.env.DATABASE_PASSWORD || 'ankit',
        charset: process.env.DATABASE_CHARSET   || 'utf8'
    }
});

module.exports.knex = knex;