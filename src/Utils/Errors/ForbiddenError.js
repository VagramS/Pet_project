const BaseError = require('./BaseError');

class ForbiddenError extends BaseError{
    constructor(message){
        super(403, message)
    }
}

module.exports = ForbiddenError;