const orderdetails_table = require('../Database/OrderDetails_table');
const Errors = require('../Utils/Errors/index');

const getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await orderdetails_table.GetAllOrderDetails();
        res.send({status: 'OK', data: orderDetails});
    } 
    catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const getOrderDetails = async (req, res) => {
    try {
        const id = req.params.orderDetailsId;
        const orderDetails = await orderdetails_table.GetOrderDetailById(id);
        if (orderDetails) 
            res.send({status: 'OK', data: orderDetails});
        else 
           throw new Errors.NotFoundError('Order Details not found');
      } 
      catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
      }
};

const createOrderDetails = async (req, res) => {
    try {
        const orderDetails = req.query;
        if(!orderDetails.OrderDetailId || !orderDetails.OrderId || !orderDetails.ItemId || !orderDetails.Quantity || !orderDetails.Price)
          throw new Errors.BadRequestError('Missing required fields');
        else {
          const new_orderDetails = await orderdetails_table.CreateOrderDetails(orderDetails);
          res.send({status: 'OK', data: new_orderDetails});
        }
    } 
    catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const updateOrderDetails = async (req, res) => {
    try {
        const orderDetail = req.query;
        if(!orderDetail.OrderDetailId)
            throw new Errors.BadRequestError('Missing OrderDetailId field');
        if(orderDetail.OrderDetailId === undefined)
            throw new Errors.NotFoundError('Order Details not found');
        else {
          const updated_orderDetail = await orderdetails_table.UpdateOrderDetails(orderDetail);
          res.send({status: 'OK', data: updated_orderDetail})
        }
    }
    catch(error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }

};

const deleteOrderDetails = async (req, res) => {
    try {
        const id = req.params.orderDetailsId;
        const deleted_orderDetails = await orderdetails_table.DeleteOrderDetails(id);
        
        if (deleted_orderDetails) 
            res.send({ status: 'OK', message: 'Order Detail deleted', data: deleted_orderDetails });
        else 
            throw new Errors.NotFoundError('Order Details not found');
    } 
    catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

module.exports = {
    getAllOrderDetails,
    getOrderDetails,
    createOrderDetails,
    updateOrderDetails,
    deleteOrderDetails
};