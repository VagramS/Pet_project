const { query } = require('express');
const client = require('./Connection');
const { GetItemById } = require('./Item_table');

const GetAllOrders = async() => {
    const result = await client.query('SELECT * FROM Orders');
    return result.rows
};

const GetOrderById = async(id) => {
    const result = await client.query('SELECT * FROM Orders WHERE OrderId = $1', [id]);
    return result.rows[0];
};

const CreateOrder = async(order) => {
    const query = 'INSERT INTO Orders (OrderId, CustomerId, OrderDate, Status, TotalPrice) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [order.OrderId, order.CustomerId, order.OrderDate, order.Status, order.TotalPrice];
    const result = await client.query(query, values);

    return result.rows[0];
};

const UpdateOrder = async(order) => {
    const query = 'UPDATE Orders SET CustomerId = $2, OrderDate = $3, Status = $4, TotalPrice = $5 WHERE OrderId = $1 RETURNING *';
    const values = [order.OrderId, order.CustomerId, order.OrderDate, order.Status, order.TotalPrice];
    const result = await client.query(query, values);

    return result.rows[0];
};

const DeleteOrder = async(id) => {
    const item = await GetItemById(id);
    const query = await client.query('DELETE FROM Orders WHERE OrderId = $1', [id]);
    
    return item;
};

module.exports = {
    GetAllOrders,
    GetOrderById,
    CreateOrder,
    UpdateOrder,
    DeleteOrder,
};