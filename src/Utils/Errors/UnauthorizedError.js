const BaseError = require('./BaseError');

class UnauthorizedError extends BaseError{
    constructor(message){
        super(401, message)
    }
}

module.exports = UnauthorizedError;