const orderdetails_table = require('../Database/OrderDetails_table');

const getAllOrderDetails = async (req, res) => {
    try {
        const orderDetails = await orderdetails_table.GetAllOrderDetails();
        res.send({status: 'OK', data: orderDetails});
    } 
    catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const getOrderDetails = async (req, res) => { // to fix
    try {
        const id = req.params.orderDetailsId;
        const orderDetails = await orderdetails_table.GetOrderDetailById(id);
        if (orderDetails) 
            res.send({status: 'OK', data: orderDetails});
        else 
            res.status(404).send({status: 'Error', message: 'Item not found'});
      } 
      catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
      }
};

const createOrderDetails = async (req, res) => {
    try {
        const orderDetails = req.query;
        if(!orderDetails.OrderDetailId || !orderDetails.OrderId || !orderDetails.ItemId || !orderDetails.Quantity || !orderDetails.Price)
          res.status(400).send({status: 'Error', message: 'Missing required field'});
        else {
          const new_orderDetails = await orderdetails_table.CreateOrderDetails(orderDetails);
          res.send({status: 'OK', data: new_orderDetails});
        }
    } 
    catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const updateOrderDetails = async (req, res) => {
    try {
        const orderDetail = req.query;
        if(!orderDetail.OrderDetailId)
            res.status(400).send({status: 'Error', message: 'Missing Order Detail id field'});
        if(orderDetail.OrderDetailId === undefined)
          res.status(400).send({status: 'Error', message: 'Order Detail does not exist'});
        else {
          const updated_orderDetail = await orderdetails_table.UpdateOrderDetails(orderDetail);
          res.send({status: 'OK', data: updated_orderDetail})
        }
    }
    catch(error) {
        res.status(500).send({status: 'Error', message: error.message});
    }

};

const deleteOrderDetails = async (req, res) => {
    try {
        const id = req.params.orderDetailsId;
        const deleted_orderDetails = await orderdetails_table.DeleteOrderDetails(id);
        
        if (deleted_orderDetails) 
            res.send({ status: 'OK', message: 'Item deleted', data: deleted_orderDetails });
        else 
            res.status(404).send({ status: 'Error', message: 'Item not found' });
    } 
    catch (error) {
          res.status(500).send({ status: 'Error', message: error.message });
    }
};

module.exports = {
    getAllOrderDetails,
    getOrderDetails,
    createOrderDetails,
    updateOrderDetails,
    deleteOrderDetails
};