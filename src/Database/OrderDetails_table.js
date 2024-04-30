const client = require('./Connection');

const GetAllOrderDetails = async() => {
    const result = await client.query('SELECT * FROM OrderDetails');
    return result.rows;
};

const GetOrderDetailById = async(id) => {
    const result = await client.query('SELECT * FROM OrderDetails WHERE OrderDetailId = $1,', [id]);
    return result.rows[0];
};

const CreateOrderDetails = async(order_details) => {
    const query = 'INSERT INTO OrderDetails (OrderDetailId, OrderId, ItemId, Quantity, Price) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [order_details.OrderDetailId, order_details.OrderId, order_details.ItemId, order_details.Quantity, order_details.Price];
    const result = await client.query(query, values);

    return result.rows[0];
};

const UpdateOrderDetails = async(order_details) => {
    const query = 'UPDATE OrderDetails SET OrderId = $2, ItemId = $3, Quantity = $4, Price = $5 WHERE OrderDetailId = $1 RETURNING *';
    const values = [order_details.OrderDetailId, order_details.OrderId, order_details.ItemId, order_details.Quantity, order_details.Price];
    const result = await client.query(query, values);

    return result.rows[0];
};

const DeleteOrderDetails = async(id) => {
    const item = await GetOrderDetailById(id);
    const query = await client.query('DELETE FROM OrderDetails WHERE OrderDetailId = $1', [id]);

    return item;
};

module.exports = {
    GetAllOrderDetails,
    GetOrderDetailById,
    CreateOrderDetails,
    UpdateOrderDetails,
    DeleteOrderDetails,
};