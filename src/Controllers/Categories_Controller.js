const category_table = require('../Database/Categories_table');

const getAllCategories = async (req, res) => {
    try{
        const categories = await category_table.GetAllCategories();
        res.send({status: 'OK', data: categories});
    }
    catch(error) {
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const getOneCategory = async (req, res) => { // to fix
    try{
        const id = req.params.categoryId;
        const category = await category_table.GetCategoryById(id);
        if(category)
            res.send({status: 'OK', data: category});
        else
            res.status(400).send({status: 'Error', message: 'Category not found'});
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const createNewCategory = async (req, res) => {
    try{
        const category = req.query;
        if(!category.CategoryId || !category.Name || !category.CategoryDesc)
            res.status(400).send({status: 'Error', message: 'Missing required field'});
        else{
            const new_category = await category_table.CreateCategory(category);
            res.send({status: 'OK', data: new_category});
        }       
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const updateCategory = async (req, res) => {
    try{
        const category = req.query;
        if(!category.CategoryId)
            res.status(400).send({status: 'Error', message: 'Missing category id field'});
        else if(category.CategoryId == undefined)
            res.status(400).send({status: 'Error', message: 'Category not found'});
        else
        {
            const updated_category = await category_table.UpdateCategory(category);
            res.send({status: 'OK', data: updated_category});
        }
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const deleteCategory = async (req, res) => {
    try{
        const id = req.params.categoryId;
        const deleted_item = await category_table.DeleteCategory(id);

        if(deleted_item)
            res.send({status: 'OK', data: deleted_item});
        else
            res.status(400).send({status: 'Error', message: 'Category not found'})
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

module.exports = {
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory,
};