const { Pool } = require('pg')

const config = {
    user: 'postgres',
    database: 'banco',
    password: 'senha',
    port: 5432
};

const pool = new Pool(config);

module.exports = pool