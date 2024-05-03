const customer_table = require('../Database/Customers_table');
const Errors = require('../Utils/Errors/index');

const getAllCustomers = async (req, res) => {
    try{
        const customers = await customer_table.GetAllCustomers();
        res.send({status: 'OK', data: customers});
    }
    catch(error){
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const getOneCustomer = async (req, res) => {
    try{
        const id = req.params.customerId;
        const customer = await customer_table.GetCustomerById(id);
        if(customer)
            res.send({status: 'OK', data: customer});
        else
            throw new Errors.NotFoundError('Customer not found');
    }
    catch(error){
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const createNewCustomer = async (req, res) => {
    try{
        const customer = req.query;
        if(!customer.CustomerId || !customer.Name || !customer.LastName || !customer.Adress || !customer.Phone || !customer.Email)
            throw new Errors.BadRequestError('Missing required fields');
        else {
            const new_customer = await customer_table.AddCustomer(customer);
            res.send({status: 'OK', data: new_customer});
        }  
    }
    catch(error){
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const updateCustomer = async (req, res) => {
    try{
        const customer = req.query;
        if(!customer.CustomerId)
            throw new Errors.BadRequestError('Missing CustomerId field');
        else if(customer.CustomerId == undefined)
            throw new Errors.NotFoundError('Customer not found');
        else {
            const updated_customer = await customer_table.UpdateCustomer(customer);
            res.send({status: 'OK', data: updated_customer});
        }
    }
    catch(error){
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

const deleteCustomer = async (req, res) => {
    try{
        const id = req.params.customerId;
        const deleted_customer = await customer_table.DeleteCustomer(id);

        if(deleted_customer)
            res.send({status: 'OK', data: deleted_customer});
        else
            throw new Errors.NotFoundError('Customer not found');
    }
    catch(error) {
        throw new Errors.InternalServerError('Error. Please try again later.');
    }
};

module.exports = {
    getAllCustomers,
    getOneCustomer,
    createNewCustomer,
    updateCustomer,
    deleteCustomer
};
