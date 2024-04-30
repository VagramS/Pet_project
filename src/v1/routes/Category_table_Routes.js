const express = require("express");
const categoryController = require("../../Controllers/Categories_Controller");

const router = express.Router();

router.get('/', categoryController.getAllCategories);

router.get('/:categoryId', categoryController.getOneCategory);

router.post('/', categoryController.createNewCategory);

router.patch('/', categoryController.updateCategory);

router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;