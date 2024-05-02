const express = require('express');
const router = express.Router();

const customerController = require('../../Controllers/Customer_Controller');

router.get('/', customerController.getAllCustomers);

router.get('/:customerId', customerController.getOneCustomer);

router.post('/', customerController.createNewCustomer);

router.patch('/', customerController.updateCustomer);

router.delete('/:customerId', customerController.deleteCustomer);

module.exports = router;