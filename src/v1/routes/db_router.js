const express = require('express');
const router = express.Router();

const Item_router = require('./Item_table_Routes');
const Category_router = require('./Category_table_Routes');
const Customer_router = require('./Customer_table_Routes');
const Order_router = require('./Order_table_Routes');
const OrderDetails_router = require('./OrderDetails_table_routes');

router.use('/items', Item_router);
router.use('/categories', Category_router);
router.use('/customers', Customer_router);
router.use('/orders', Order_router);
router.use('/orderdetails', OrderDetails_router);

module.exports = {DB_Router: router};