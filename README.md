# autobot
A project of some useful cypress stuff you may love

@TODO: 
graphql request plugins


### raw-sql-plugin

Usage: 

In `cypress.env.json`, add your database connection config:

```json
{
  "databaseOptions": {
    "host": "localhost",
    "user": "john.doe",
    "database": "hello.world",
    "password": "my.p@ssword",
    "client": "mysql2" // knex available client: [mysql2, postgres, ...]
  }
}
```


In `plugins/index.js` of your project, add these line:


```javascript
module.exports = (on, config) => {
    // ... other plugins event 
    on('task', {
        rawSQL(args) {
          return rawSQLHandler(on, config)(args);
        },
        //... other task
    });
}

```
