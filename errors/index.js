const AuthError = require('./auth-error'); // 401
const BadRequestError = require('./bad-request-error'); // 400
const ConflictError = require('./conflict-error'); // 409
const ForbiddenError = require('./forbidden-error'); // 403
const NotFoundError = require('./not-found-error'); // 404
const ServerError = require('./server-error'); // 500

module.exports = {
  AuthError,
  BadRequestError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  ServerError,
};
