const express = require('express');
const orderController = require('../../Controllers/Orders_Controller');

const router = express.Router();

router.get('/', orderController.getAllOrders);

router.get('/:orderId', orderController.getItem);

router.post('/', orderController.createOrder);

router.patch('/', orderController.updateOrder);

router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;