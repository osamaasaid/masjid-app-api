import mongoose from 'mongoose';
import pkg from '../../package';

const env = process.env.NODE_ENV || 'qa';

const get = (req, res, _next) => {
  // Check readyState of mongoose connection to fail the
  // service out of the load-balancer rotation.
  // if (mongoose.connection.readyState !== mongoose.Connection.STATES.connected) {
  //   return res.status(503).send('Service Unavailable');
  // }

  return res.status(200).json({
    name: pkg.name,
    description: pkg.description,
    version: pkg.version
  });
};

module.exports = { get };
