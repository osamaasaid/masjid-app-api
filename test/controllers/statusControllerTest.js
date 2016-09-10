const _ = require('underscore');
const should = require('should');
// const mongoose = require('mongoose');

const statusController = require('../../src/controllers/statusController');
const pkg = require('../../package');

describe('StatusController', function() {
  describe('#get()', function() {
    var res;
    var req = {};

    context('with connected database', function() {
      // beforeEach(function() {
      //   mongoose.connection.readyState = 1;
      // });

      it('should be successful (200 OK)', function(done) {
        res = {
          status: function(code) {
            code.should.equal(200);
            done();
            return this;
          },
          json: function(data) {}
        };

        return statusController.get(req, res);
      });

      it('should have expected response data', function(done) {
        res = {
          status: function(code) {
            return this;
          },
          json: function(data) {
            data.name.should.equal(pkg.name);
            data.description.should.equal(pkg.description);
            data.version.should.equal(pkg.version);

            done();
          }
        };

        return statusController.get(req, res);
      });
    });

    // context('with non-connected database', function() {
    //   beforeEach(function() {
    //     mongoose.connection.readyState = 0;
    //   });
    // 
    //   it('should have an error (503 Service Unavailable)', function(done) {
    //     res = {
    //       status: function(code) {
    //         code.should.equal(503);
    //         done();
    //         return this;
    //       },
    //       send: function(data) {}
    //     };
    //
    //     return statusController.get(req, res);
    //   });
    // });
  });
})
