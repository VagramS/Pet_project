const client = require('./Connection');

const GetAllCustomers = async() => {
    const result = await client.query('SELECT * FROM Customers');
    return result.rows;
};

const GetCustomerById = async(id) => {
    const result = await client.query('SELECT * FROM Customers WHERE CustomerId = $1', [id]);
    return result.rows[0];
};

const AddCustomer = async(customer) => {
    const query = 'INSERT INTO Customers (CustomerId, Name, LastName, Adress, Phone, Email) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [customer.CustomerId, customer.Name, customer.LastName, customer.Adress, customer.Phone, customer.Email];
    const result = await client.query(query, values);

    return result.rows[0];
};

const UpdateCustomer = async(customer) => {
    const query = 'UPDATE Customers SET Name = $2, LastName = $3, Adress = $4, Phone = $5, Email = $6 WHERE CustomerId = $1 RETURNING *';
    const values = [customer.CustomerId, customer.Name, customer.LastName, customer.Adress, customer.Phone, customer.Email];
    const result = await client.query(query, values)

    return result.rows[0];
};

const DeleteCustomer = async(id) => {
    const item = await GetCustomerById(id);
    const query = await client.query ('DELETE FROM Customer WHERE CustomerId = $1', [id]);

    return item;
};

module.exports = {
    GetAllCustomers,
    GetCustomerById,
    AddCustomer,
    UpdateCustomer,
    DeleteCustomer,
};