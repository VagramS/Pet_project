const storeService = require("../Services/storeService");

const getAllItems = (req, res) => {
    const allItems = storeService.getAllItems();
    res.send("Get all Items");
};

const getOneItem = (req, res) => {
    const item = storeService.getOneItem();
    res.send("Get a certain item");
};

const createNewComputer = (req, res) => {
    const newItem = storeService.createNewComputer();
    res.send("Create a new computer");
};

const updateAnItem = (req, res) => {
    const updatedItem = storeService.updateAnItem();
    res.send("Update an existing computer");
};

const deleteOneComputer = (req, res) => {
    const deletedItem = storeService.deleteOneComputer();
    res.send("Delete a computer");
};

module.exports = {
    getAllItems,
    getOneItem,
    createNewComputer,
    updateAnItem,
    deleteOneComputer,
};