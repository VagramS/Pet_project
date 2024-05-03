const order_table = require('../Database/Orders_table');
const Errors = require('../Utils/Errors/index');

const getAllOrders = async (req, res) => {
    try {
        const orders = await order_table.GetAllOrders();
        res.send({status: 'OK', data: orders});
    } 
    catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const getOrder = async (req, res) => {
    try {
        const id = req.params.orderId;
        const order = await order_table.GetOrderById(id);
        if (order) 
            res.send({status: 'OK', data: order});
        else 
            throw new Errors.NotFoundError('Order not found');
    } 
    catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const createOrder = async (req, res) => {
    try {
        const order = req.query;
        if(!order.OrderId || !order.CustomerId || !order.OrderDate || !order.Status || !order.TotalPrice)
          throw new Errors.BadRequestError('Missing required fields');
        else {
          const new_order = await order_table.CreateOrder(order);
          res.send({status: 'OK', data: new_order});
        }
    } 
    catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const updateOrder = async (req, res) => {
    try{
        const order = req.query;
        if(!order.OrderId)
            throw new Errors.BadRequestError('Missing OrderId field');
        if(order.OrderId === undefined)
          throw new Errors.NotFoundError('Order not found');
        else {
          const updated_order = await order_table.UpdateOrder(order);
          res.send({status: 'OK', data: updated_order})
        }
      }
      catch(error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
      }
};

const deleteOrder = async (req, res) => {
    try {
        const id = req.params.orderId;
        const deleted_order = await order_table.DeleteOrder(id);
        
        if (deleted_order) 
            res.send({ status: 'OK', message: 'Order deleted', data: deleted_order });
        else 
            throw new Errors.NotFoundError('Order not found');
      } 
      catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
      }
};

module.exports = {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
};