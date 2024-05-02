const express = require('express');
const router = express.Router();

const storeController = require("../../Controllers/Item_Controller");

router.get('/', storeController.getItems);

router.get('/:itemId', storeController.getOneItem);

router.post('/', storeController.createComputer);

router.patch('/', storeController.updateItem);

router.delete('/:itemId', storeController.deleteItem);

module.exports = router;