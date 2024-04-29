const storeService = require("../Services/storeService");
const db = require("../Database/db");

const getItems = async (req, res) => {
  try {
    const items = await db.getAllItems();
    res.send({status: 'OK', data: items});
  } 
  catch (error) {
    res.status(500).send({status: 'Error', message: error.message});
  }
};

const getOneItem = async (req, res) => {
    try {
        const id = req.params.itemId;
        const item = await db.getItem(id);
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
      const newItem = await db.CreateItem(item);
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
        const updated_item = await db.UpdateItem(item);
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
    const rowCount = await db.DeleteItem(id);
    
    if (rowCount > 0) 
        res.send({ status: 'OK', message: 'Item deleted' });
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