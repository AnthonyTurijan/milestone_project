const {Client} = require('pg')
const client = new Client({
    host:'localhost',
    user:'postgres',
    port: 5432,
    password: 'Bad8reak!!',
    database: 'Socializr'
})

client.connect();

client.query('Select * from events',(err, res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})

module.exports = client