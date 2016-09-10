// import mongoose from 'mongoose';
import os from 'os';
import pkg from '../../package';

const env = process.env.NODE_ENV || 'development';

const get = (req, res, _next) => {
  // Check readyState of mongoose connection to fail the
  // service out of the load-balancer rotation.
  // if (mongoose.connection.readyState !== mongoose.Connection.STATES.connected) {
  //   return res.status(503).send('Service Unavailable');
  // }

  return res.status(200).json({
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    env,
    os: os.hostname(),
    repo: pkg.homepage
  });
};

module.exports = { get };
