# autobot
A project of some useful cypress stuff you may love

@TODO: 
graphql request plugins


### raw-sql-plugin

Usage: 

In `cypress.env.json`, add your database connection config.
Here is the example, please replace with your db config 

```json
{
  "databaseOptions": {
    "host": "localhost",
    "user": "john.doe",
    "database": "hello.world",
    "password": "my.p@ssword",
    "client": "mysql2"
  }
}
```


In `plugins/index.js` of your project, add these line:


```javascript
const { rawSqlHandler } = require('@theremjx01/autobot');

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

In your test file, example: `demo.spec.js`, use this command to call use `rawSQL`:

```javacript
describe('demo test', () => {
    it('should be able to call rawsql', () => {
        cy.task('rawSQL', 'SELECT * FROM demo_table').then(sqlRes => {
            // handle result    
        }).catch(sqlErr => {
            // handle error
        });
    });
})
```