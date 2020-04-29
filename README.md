# autobot
A project of some useful cypress stuff you may love

@TODO: 
graphql request plugins


### raw-sql-plugin

Usage: 

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
