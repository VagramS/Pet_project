const BaseError = require('./BaseError');

class ConflictError extends BaseError {
    constructor(message){
        super(409, message);
    }
}

module.exports = ConflictError;