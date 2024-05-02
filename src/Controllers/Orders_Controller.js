const order_table = require('../Database/Orders_table');

const getAllOrders = async (req, res) => {
    try {
        const orders = await order_table.GetAllOrders();
        res.send({status: 'OK', data: orders});
    } 
    catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const getOrder = async (req, res) => {
    try {
        const id = req.params.orderId;
        const order = await order_table.GetOrderById(id);
        if (order) 
            res.send({status: 'OK', data: order});
        else 
            res.status(404).send({status: 'Error', message: 'Item not found'});
    } 
    catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const createOrder = async (req, res) => {
    try {
        const order = req.query;
        if(!order.OrderId || !order.CustomerId || !order.OrderDate || !order.Status || !order.TotalPrice)
          res.status(400).send({status: 'Error', message: 'Missing required field'});
        else {
          const new_order = await order_table.CreateOrder(order);
          res.send({status: 'OK', data: new_order});
        }
    } 
    catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const updateOrder = async (req, res) => {
    try{
        const order = req.query;
        if(!order.OrderId)
            res.status(400).send({status: 'Error', message: 'Missing order id field'});
        if(order.OrderId === undefined)
          res.status(400).send({status: 'Error', message: 'Order does not exist'});
        else {
          const updated_order = await order_table.UpdateOrder(order);
          res.send({status: 'OK', data: updated_order})
        }
      }
      catch(error) {
        res.status(500).send({status: 'Error', message: error.message});
      }
};

const deleteOrder = async (req, res) => {
    try {
        const id = req.params.orderId;
        const deleted_order = await order_table.DeleteOrder(id);
        
        if (deleted_order) 
            res.send({ status: 'OK', message: 'Item deleted', data: deleted_order });
        else 
            res.status(404).send({ status: 'Error', message: 'Order not found' });
      } 
      catch (error) {
          res.status(500).send({ status: 'Error', message: error.message });
      }
};

module.exports = {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
};