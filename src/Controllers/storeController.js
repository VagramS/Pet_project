const storeService = require("../Services/storeService");

// Tables connection
const item_table = require("../Database/Item_table");
const categories_table = require('../Database/Categories_table');
const customers_table = require('../Database/Customers_table');
const orders_table = require('../Database/Orders_table');
const orderDetails_table = require('../Database/OrderDetails_table');

const getItems = async (req, res) => {
  try {
    const items = await item_table.GetAllItems();
    res.send({status: 'OK', data: items});
  } 
  catch (error) {
    res.status(500).send({status: 'Error', message: error.message});
  }
};

const getOneItem = async (req, res) => {
    try {
        const id = req.params.itemId;
        const item = await item_table.GetItemById(id);
        if (item) {
            res.send({status: 'OK', data: item});
        } else {
            res.status(404).send({status: 'Error', message: 'Item not found'});
        }
      } 
      catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
      }
};

const createNewComputer = async (req, res) => {
   try {
    const item = req.query;
    if(!item.ItemId || !item.Name || !item.Price || !item.Description || !item.StockQuantity || !item.CategoryId || !item.Producer || !item.URL || !item.Discounted)
      res.status(400).send({status: 'Error', message: 'Missing required field'});
    else{
      const newItem = await item_table.CreateItem(item);
      res.send({status: 'OK', data: newItem});
    }
  } 
  catch (error) {
    res.status(500).send({status: 'Error', message: error.message});
  }
};

const updateAnItem = async (req, res) => {
    try{
      const item = req.query;
      if(!item.ItemId || !item.Name || !item.Price || !item.Description || !item.StockQuantity || !item.CategoryId || !item.Producer || !item.URL || !item.Discounted)
          res.status(400).send({status: 'Error', message: 'Missing required field'});
      if(item.ItemId === undefined)
        res.status(400).send({status: 'Error', message: 'Item does not exist'});
      else {
        const updated_item = await item_table.UpdateItem(item);
        res.send({status: 'OK', data: updated_item})
      }
    }
    catch(error) {
      res.status(500).send({status: 'Error', message: error.message});
    }
};

const deleteOneItem = async (req, res) => {
  try {
    const id = req.params.itemId;
    const item = await item_table.DeleteItem(id);
    
    if (item) 
        res.send({ status: 'OK', message: 'Item deleted', data: item });
    else 
        res.status(404).send({ status: 'Error', message: 'Item not found' });
  } 
  catch (error) {
      res.status(500).send({ status: 'Error', message: error.message });
  }
};

module.exports = {
    getItems,
    getOneItem,
    createNewComputer,
    updateAnItem,
    deleteOneItem,
};