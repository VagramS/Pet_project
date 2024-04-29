const express = require("express");
const storeController = require("../../Controllers/storeController");

const router = express.Router();

router.get('/', storeController.getItems);

router.get('/:itemId', storeController.getOneItem);

router.post('/', storeController.createNewComputer);

router.patch('/', storeController.updateAnItem);

router.delete('/:itemId', storeController.deleteOneItem);

module.exports = router;