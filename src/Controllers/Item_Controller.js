const item_table = require("../Database/Item_table");
const Errors = require('../Utils/Errors/index');

const getItems = async (req, res) => {
  try {
    const items = await item_table.GetAllItems();
    res.send({status: 'OK', data: items});
  } 
  catch (error) {
    throw new Errors.InternalServerError('Error. Please try again later.');
  }
};

const getOneItem = async (req, res) => {
    try {
        const id = req.params.itemId;
        const item = await item_table.GetItemById(id);
        if (item) 
            res.send({status: 'OK', data: item});
         else 
            throw new Errors.NotFoundError('Item not found');
        } 
      catch (error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
      }
};

const createComputer = async (req, res) => {
   try {
    const item = req.query;
    if(!item.ItemId || !item.Name || !item.Price || !item.Description || !item.StockQuantity || !item.CategoryId || !item.Producer || !item.URL || !item.Discounted)
      throw new Errors.BadRequestError('Missing required fields');
    else {
      const newItem = await item_table.CreateItem(item);
      res.send({status: 'OK', data: newItem});
    }
  } 
  catch (error) {
    throw new Errors.InternalServerError('Error. Please try again later.');
  }
};

const updateItem = async (req, res) => {
    try{
      const item = req.query;
      if(!item.ItemId)
        throw new Errors.BadRequestError('Missing ItemId field');
      if(item.ItemId === undefined)
        throw new Errors.NotFoundError('Item not found');
      else {
        const updated_item = await item_table.UpdateItem(item);
        res.send({status: 'OK', data: updated_item})
      }
    }
    catch(error) {
      throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const deleteItem = async (req, res) => {
  try {
    const id = req.params.itemId;
    const item = await item_table.DeleteItem(id);
    
    if (item) 
        res.send({ status: 'OK', message: 'Item deleted', data: item });
    else 
       throw new Errors.NotFoundError('Item not found');
  } 
  catch (error) {
    throw new Errors.InternalServerError('Error. Please try again later.');
  }
};

module.exports = {
    getItems,
    getOneItem,
    createComputer,
    updateItem,
    deleteItem,
};