const {Client} = require('pg');

const client = new Client({
    user:"postgres",
    password:"secret",
    host:"localhost",
    port:5432,
    database:"postgres"
});

client.connect()
    .then(()=> console.log('connected'))
    .then(()=> client.query("INSERT INTO customers (customer_name) VALUES('Apple'),('Samsung'),('Sony');"))  
    .catch(e=>console.log(e))
    .finally(()=>client.end());