const express = require('express');
const router = express.Router();

const orderController = require('../../Controllers/Orders_Controller');

router.get('/', orderController.getAllOrders);

router.get('/:orderId', orderController.getOrder);

router.post('/', orderController.createOrder);

router.patch('/', orderController.updateOrder);

router.delete('/:orderId', orderController.deleteOrder);

module.exports = router;