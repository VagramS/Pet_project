const BaseError = require('./BaseError');

class BadRequestError extends BaseError{
    constructor(message, data){
        super(400, message, data)
    }
}

module.exports = BadRequestError;