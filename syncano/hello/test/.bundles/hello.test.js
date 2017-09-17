'use strict';

var _chai = require('chai');

var _syncanoTest = require('syncano-test');

describe('hello', function () {
  it('simple run', function (done) {
    (0, _syncanoTest.run)('hello', {}, {}).then(response => {
      _chai.assert.equal(response.data.msg, 'Hello World!');
      done();
    });
  });
});