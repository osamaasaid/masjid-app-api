require('babel-polyfill');
require('dotenv').config({ silent: true });

require('sinon-as-promised')(require('bluebird'));
require('sinon-mongoose');
require('should');

require('./../src/models');
