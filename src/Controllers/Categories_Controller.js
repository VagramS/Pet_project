const category_table = require('../Database/Categories_table');
const Errors = require('../Utils/Errors/index');

const getAllCategories = async (req, res) => {
    try{
        const categories = await category_table.GetAllCategories();
        res.send({status: 'OK', data: categories});
    }
    catch(error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const getOneCategory = async (req, res) => {
    try{
        const id = req.params.categoryId;
        const category = await category_table.GetCategoryById(id);
        if(category)
            res.send({status: 'OK', data: category});
        else
            throw new Errors.NotFoundError('Category not found');
    }
    catch(error){
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const createNewCategory = async (req, res) => {
    try{
        const category = req.query;
        if(!category.CategoryId || !category.Name || !category.CategoryDesc)
            throw new Errors.BadRequestError('Missing required fields');
        else{
            const new_category = await category_table.CreateCategory(category);
            res.send({status: 'OK', data: new_category});
        }       
    }
    catch(error){
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const updateCategory = async (req, res) => {
    try{
        const category = req.query;
        if(!category.CategoryId)
            throw new Errors.BadRequestError('Missing category id field');
        else if(category.CategoryId == undefined)
            throw new Errors.NotFoundError('Category not found');
        else
        {
            const updated_category = await category_table.UpdateCategory(category);
            res.send({status: 'OK', data: updated_category});
        }
    }
    catch(error){
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const deleteCategory = async (req, res) => {
    try{
        const id = req.params.categoryId;
        const deleted_item = await category_table.DeleteCategory(id);

        if(deleted_item)
            res.send({status: 'OK', data: deleted_item});
        else
            throw new Errors.NotFoundError('Category not found');
    }
    catch(error){
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

module.exports = {
    getAllCategories,
    getOneCategory,
    createNewCategory,
    updateCategory,
    deleteCategory,
};