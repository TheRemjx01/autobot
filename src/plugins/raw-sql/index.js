const { get } = require('lodash');
const knex = require('knex');

const DEFAULT_CLIENT = 'mysql2';

const generateKnexClient = config => {
    const connection = get(config, 'env.databaseOptions');
    const client = get(connection, 'client', DEFAULT_CLIENT);
    const dbConfigConnection = Object.assign(client);
    delete dbConfigConnection.client;
    const dbConfig = {
        client: get(connection, 'client', 'mysql2'),
        connection: dbConfigConnection,
    };
    return knex(dbConfig);
};

const rawSQLHandler = (on, config) => rawQuery => {
    const knexClient = generateKnexClient(config);
    return new Promise((resolve, reject) => {
        knexClient
            .raw(rawQuery)
            .then(res => {
                if (!res) {
                    resolve(null);
                }
                resolve(res);
            })
            .catch(err => {
                reject(err);
            })
            .finally(() => {
                knexClient.destroy();
                resolve(null);
            });
    });
};

module.exports = {
    rawSQLHandler,
};
