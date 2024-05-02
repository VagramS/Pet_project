const customer_table = require('../Database/Customers_table');

const getAllCustomers = async (req, res) => {
    try{
        const customers = await customer_table.GetAllCustomers();
        res.send({status: 'OK', data: customers});
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const getOneCustomer = async (req, res) => {
    try{
        const id = req.params.customerId;
        const customer = await customer_table.GetCustomerById(id);
        if(customer)
            res.send({status: 'OK', data: customer});
        else
            res.status(400).send({status: 'Error', message: 'Customer not found'})
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const createNewCustomer = async (req, res) => {
    try{
        const customer = req.query;
        if(!customer.CustomerId || !customer.Name || !customer.LastName || !customer.Adress || !customer.Phone || !customer.Email)
            res.status(400).send({status: 'Error', message: 'Missing required field'})
        else {
            const new_customer = await customer_table.AddCustomer(customer);
            res.send({status: 'OK', data: new_customer});
        }  
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const updateCustomer = async (req, res) => {
    try{
        const customer = req.query;
        if(!customer.CustomerId)
            res.status(400).send({status: 'Error', message: 'Missing customer id field'})
        else if(customer.CustomerId == undefined)
            res.status(400).send({status: 'Error', message: 'Customer not found'})
        else {
            const updated_customer = await customer_table.UpdateCustomer(customer);
            res.send({status: 'OK', data: updated_customer});
        }
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

const deleteCustomer = async (req, res) => {
    try{
        const id = req.params.customerId;
        const deleted_customer = await customer_table.DeleteCustomer(id);

        if(deleted_customer)
            res.send({status: 'OK', data: deleted_customer});
        else
            res.status(400).send({status: 'OK', message: 'Customer not found'})
    }
    catch(error){
        res.status(500).send({status: 'Error', message: error.message});
    }
};

module.exports = {
    getAllCustomers,
    getOneCustomer,
    createNewCustomer,
    updateCustomer,
    deleteCustomer
};
