const client = require('./Connection');

// Get all order details from the OrderDetails table
const GetAllOrderDetails = async() => {
    const result = await client.query('SELECT * FROM OrderDetails');
    return result.rows;
};

// Get an order detail from the OrderDetails table by OrderDetailId
const GetOrderDetailById = async(id) => {
    const result = await client.query('SELECT * FROM OrderDetails WHERE OrderDetailId = $1', [id]);
    return result.rows[0];
};

// Create a new order detail in the OrderDetails table
const CreateOrderDetails = async(order_details) => {
    const query = 'INSERT INTO OrderDetails (OrderDetailId, OrderId, ItemId, Quantity, Price) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [order_details.OrderDetailId, order_details.OrderId, order_details.ItemId, order_details.Quantity, order_details.Price];
    const result = await client.query(query, values);

    return result.rows[0];
};

// Updates an order detail from OrderDetails table
const UpdateOrderDetails = async(order_details) => {
    const query = 'UPDATE OrderDetails SET OrderId = $2, ItemId = $3, Quantity = $4, Price = $5 WHERE OrderDetailId = $1 RETURNING *';
    const values = [order_details.OrderDetailId, order_details.OrderId, order_details.ItemId, order_details.Quantity, order_details.Price];
    const result = await client.query(query, values);

    return result.rows[0];
};

// Delete order detail from OrderDetails table by OrderDetailId
const DeleteOrderDetails = async(id) => {
    const orderDetail = await GetOrderDetailById(id);
    const query = await client.query('DELETE FROM OrderDetails WHERE OrderDetailId = $1', [id]);

    return orderDetail;
};

module.exports = {
    GetAllOrderDetails,
    GetOrderDetailById,
    CreateOrderDetails,
    UpdateOrderDetails,
    DeleteOrderDetails,
};