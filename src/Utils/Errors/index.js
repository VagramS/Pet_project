const BadRequestError = require('./BadRequestError');
const BaseError = require('./BaseError');
const ConflictError = require('./ConflictError');
const ForbiddenError = require('./ForbiddenError');
const InternalServerError = require('./InternalServiceError');
const NotFoundError = require('./NotFoundError');
const UnauthorizedError = require('./UnauthorizedError');

module.exports = {
    BadRequestError,
    BaseError,
    ConflictError,
    ForbiddenError,
    InternalServerError,
    NotFoundError,
    UnauthorizedError,
};
