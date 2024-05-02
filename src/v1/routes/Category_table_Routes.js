const express = require('express');
const router = express.Router();

const categoryController = require("../../Controllers/Categories_Controller");

router.get('/', categoryController.getAllCategories);

router.get('/:categoryId', categoryController.getOneCategory);

router.post('/', categoryController.createNewCategory);

router.patch('/', categoryController.updateCategory);

router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;