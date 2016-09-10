import R from 'ramda';
import Boom from 'boom';
// import logger from '../utils/logger';

module.exports = () => {
  return (error, req, res, _next) => {
    const kaboom = Boom.wrap(error, error.statusCode || 500);
    const response = R.merge(kaboom.output.payload, {
      details: error.error
    });

    // logger.error(error.message, {
    //   error,
    //   req,
    //   client_error: response
    // });

    res.status(response.statusCode).send(response);
  };
};
