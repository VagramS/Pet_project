const express = require('express');
const router = express.Router();

const orderDetailsController = require('../../Controllers/OrderDetails_Controller');

router.get('/', orderDetailsController.getAllOrderDetails);

router.get('/:orderDetailsId', orderDetailsController.getOrderDetails);

router.post('/', orderDetailsController.createOrderDetails);

router.patch('/', orderDetailsController.updateOrderDetails);

router.delete('/:orderDetailsId', orderDetailsController.deleteOrderDetails);

module.exports = router;