const knex = require("./db/knex.js");


function makeTransactions(n) {

    let transObjs = []
    for(let i = 0; i < n; i++){
      let randomUser = Math.ceil(Math.random()*10)
      transObjs.push({
        user_id: randomUser,
        amount: Math.floor(Math.random()*100),
        type: 'purchase',
        business_name: 'company co.'
      })
    }
    return transObjs
}

var test10 = makeTransactions(10)

const insertTrans =  (arr) => {
    console.time('insert')
    knex.batchInsert('transactions', arr).then(()=> {
        console.timeEnd('insert')
    })
    return 2
}

insertTrans(makeTransactions(Math.pow(10, 6))) 

