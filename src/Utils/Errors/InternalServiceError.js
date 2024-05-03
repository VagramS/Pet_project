const BaseError = require('./BaseError');

class InternalServiceError extends BaseError{
    constructor(message){
        super(500, message)
    }
}

module.exports = InternalServiceError;