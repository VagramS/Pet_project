const getAllItems = (req, res) => {
    res.send("Get all Items");
};

const getOneItem = (req, res) => {
    res.send("Get a certain item");
};

const createNewComputer = (req, res) => {
    res.send("Create a new computer");
};

const updateAnItem = (req, res) => {
    res.send("Update an existing computer");
};

const deleteOneComputer = (req, res) => {
    res.send("Delete a computer");
};

module.exports = {
    getAllItems,
    getOneItem,
    createNewComputer,
    updateAnItem,
    deleteOneComputer,
};