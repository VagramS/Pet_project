const BaseError = require('./BaseError');

class NotFoundError extends BaseError{
    constructor(message){
        super(404, message)
    }
}

module.exports = NotFoundError;