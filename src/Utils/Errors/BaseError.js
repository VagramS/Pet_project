class BaseError extends Error {
    constructor(httpCode, message, data) {
        super();
        this.httpCode = httpCode;
        this.message = message;
        this.data = data;
    }
}

module.exports = BaseError;