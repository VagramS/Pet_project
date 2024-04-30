const client = require('./Connection');

const GetAllCategories = async () => {
    const result = await client.query('SELECT * FROM Categories');
    return result.rows;
};

const GetCategoryById = async (id) => {
    const result = await client.query ('SELECT * FROM Categories WHERE CategoryId = $1', [id]);
    return result.rows[0];
};

const CreateCategory = async(category) => {
    const query = 'INSERT INTO Categories(CategoryId, Name, Description) VALUES ($1, $2, $3) RETURNING *';
    const values = [category.categoryId, category.Name, category.categoryDesc];
    const result = await client.query(query, values);

    return result.rows[0];
};

const UpdateCategory = async(category) => {
    const query = 'UPDATE Categories SET Name = $2, Description = $3 WHERE CategoryId = $1 RETURNING *';
    const values = [category.categoryId, category.Name, category.categoryDesc];
    const result = await client.query(query, values);

    return result.rows[0];
};

const DeleteCategory = async(id) => {
    const item = await GetCategoryById(id);
    const query = await client.query ('DELETE FROM Categories WHERE CategoryId = $1', [id]);

    return item;
};

module.exports = {
    GetAllCategories,
    GetCategoryById,
    CreateCategory,
    UpdateCategory,
    DeleteCategory,
};
