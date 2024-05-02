const { Client } = require('pg');
    
const client = new Client({
    user: 'postgres',
    host: "localhost",
    database: 'Store',
    password: 'postgres',
    port: 5432,
});

client.connect(function(err) {
    if(err) 
        console.error('Connection error', err.stack);
    else
        console.log("Connected");
});

module.exports = client;