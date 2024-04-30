const express = require('express');
const orderDetailsController = require('../../Controllers/OrderDetails_Controller');

const router = express.Router();

router.get('/', orderDetailsController.getAllOrderDetails);

router.get('/:orderDetailId', orderDetailsController.getOrderDetails);

router.post('/', orderDetailsController.createOrderDetails);

router.patch('/', orderDetailsController.updateOrderDetails);

router.delete('/:orderDetailId', orderDetailsController.deleteOrderDetails);

module.exports = router;