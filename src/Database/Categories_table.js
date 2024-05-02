const client = require('./Connection');

// Get all categories from the Categories table
const GetAllCategories = async () => {
    const result = await client.query('SELECT * FROM Categories');
    return result.rows;
};

// Get a category from the Categories table by CategoryId
const GetCategoryById = async (id) => {
    const result = await client.query ('SELECT * FROM Categories WHERE CategoryId = $1', [id]);
    return result.rows[0];
};

// Create a new category in the Categories table
const CreateCategory = async(category) => {
    const query = 'INSERT INTO Categories(CategoryId, Name, Description) VALUES ($1, $2, $3) RETURNING *';
    const values = [category.CategoryId, category.Name, category.CategoryDesc];
    const result = await client.query(query, values);

    return result.rows[0];
};

// Updates a category from Categories table
const UpdateCategory = async(category) => {
    const query = 'UPDATE Categories SET Name = $2, Description = $3 WHERE CategoryId = $1 RETURNING *';
    const values = [category.CategoryId, category.Name, category.CategoryDesc];
    const result = await client.query(query, values);

    return result.rows[0];
};

// Delete category from Categories table by CategoryId
const DeleteCategory = async(id) => {
    const category = await GetCategoryById(id);
    const query = await client.query ('DELETE FROM Categories WHERE CategoryId = $1', [id]);

    return category;
};

module.exports = {
    GetAllCategories,
    GetCategoryById,
    CreateCategory,
    UpdateCategory,
    DeleteCategory,
};
