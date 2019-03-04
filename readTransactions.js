const knex = require("./db/knex.js");

const readAll = () => {
    console.time('read all')
    knex('transactions').select().then(()=> {
        console.timeEnd('read all')
    })
}
readAll()