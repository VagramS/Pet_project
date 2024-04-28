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

const getAllItems = async () => {
    const result = await client.query('SELECT * FROM Item');
    return result.rows;
};

const getItem = async (id) => {
    const result = await client.query('SELECT * FROM Item WHERE itemid = $1', [id]);
    return result.rows[0];
};

// to check
const CreateItem = async (id, name, price, description, quantity, categoryid, producer, url, discounted) => {
    const result = await client.query('INSERT INTO Item (ItemId, Name, Price, Description, StockQuantity, CategoryId, Producer, URL, Discounted) VALUES (id, name, price, description, quantity, categoryid, producer, url, discounted)');
    return result.rows;
};

// To finish
const UpdateItem = async () => {
    const result = await client.query('SELECT * FROM item');
    return result.rows;
};

// To finish
const DeleteItem = async () => {
    const result = await client.query('SELECT * FROM item');
    return result.rows;
};
  
module.exports = {
    getAllItems,
    getItem,
    CreateItem,
    UpdateItem,
    DeleteItem,
};