const express = require("express");
const storeController = require("../../Controllers/storeController");

const router = express.Router();

router.get('/', storeController.getAllItems);

router.get('/:itemId', storeController.getOneItem);

router.post('/', storeController.createNewComputer);

router.patch('/itemId', storeController.updateAnItem);

router.delete('/:itemId', storeController.deleteOneComputer);

module.exports = router;