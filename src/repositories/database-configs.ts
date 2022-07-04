import { Client } from 'pg';

const config = {
    user: 'postgres',
    database: 'banco',
    password: 'senha',
    port: 5432
};

const client = new Client(config);

export { client };