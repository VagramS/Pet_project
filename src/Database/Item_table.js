const client = require('./Connection');

// Get all items from the Item table
const GetAllItems = async () => {
    const result = await client.query('SELECT * FROM Item');
    return result.rows;
};

// Get an item from the Item table
const GetItemById = async (id) => {
    const result = await client.query('SELECT * FROM Item WHERE ItemId = $1', [id]);
    return result.rows[0];
};

// Create a new item in the Item table
const CreateItem = async (item) => {
    const query = 'INSERT INTO Item (ItemId, Name, Price, Description, StockQuantity, CategoryId, Producer, URL, Discounted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
    const values = [item.ItemId, item.Name, item.Price, item.Description, item.StockQuantity, item.CategoryId, item.Producer, item.URL, item.Discounted];
    const result = await client.query(query, values);

    return result.rows[0];
};

// Updates an item from Item table
const UpdateItem = async (item) => {
    const query = 'UPDATE Item SET Name = $2, Price = $3, Description = $4, StockQuantity = $5, CategoryId = $6, Producer = $7, URL = $8, Discounted = $9 WHERE Itemid = $1 RETURNING *';
    const values = [item.ItemId, item.Name, item.Price, item.Description, item.StockQuantity, item.CategoryId, item.Producer, item.URL, item.Discounted];
    const result = await client.query(query, values);

    return result.rows[0];
};

// Delete item from Item table and if the item is in the OrderDetails, delete it from the OrderDetails
const DeleteItem = async (id) => {
    const item = await GetItemById(id);
    const query = await client.query ('DELETE FROM Item WHERE ItemId = $1', [id]);

    return item;
};
  
module.exports = {
    GetAllItems,
    GetItemById,
    CreateItem,
    UpdateItem,
    DeleteItem,
};