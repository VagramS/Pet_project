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
    const newItem = await db.CreateItem();
    res.send({status: 'OK', data: newItem});
  } 
  catch (error) {
    res.status(500).send({status: 'Error', message: error.message});
  }
};

const updateAnItem = async (req, res) => {
    try {
        const updatedItem = await db.UpdateItem();
        res.send({status: 'OK', data: updatedItem});
      } 
      catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
      }
};

const deleteOneItem = async (req, res) => {
    try {
        await db.DeleteItem();
        res.send({status: 'OK', message: 'Item deleted'});
      } 
      catch (error) {
        res.status(500).send({status: 'Error', message: error.message});
      }
};

module.exports = {
    getItems,
    getOneItem,
    createNewComputer,
    updateAnItem,
    deleteOneItem,
};