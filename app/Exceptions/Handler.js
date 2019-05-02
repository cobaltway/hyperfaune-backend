const errorsStatus = { USER_NOT_FOUND: 400 };

class ExceptionHandler {
  async handle(error, { response }) {
    response.status(errorsStatus[error.message] || error.status).send(error.message.split(':')[0]);
  }
  async report(error, { request }) {
    console.error(`${request.method()} ${request.originalUrl()}:`, error);
  }
}

module.exports = ExceptionHandler;
