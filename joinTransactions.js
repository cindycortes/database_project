const knex = require("./db/knex.js");

const readAll = () => {
    console.time('join')
    knex('users')
        .join('transactions', 'users.id', '=', 'transactions.user_id')
        .select('user_id', 'transactions.id')
        .then(()=> {
        console.timeEnd('join')
    })
}
readAll()