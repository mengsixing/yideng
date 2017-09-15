'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request() {
  return (0, _supertest2.default)(_app2.default.listen());
}

// describe('GET /user', function() {
//   it('respond with json', function(done) {
//     request(app)
//       .get('/praise/select')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200).end(function(err, res) {
//         if (res.data<=1) return done(err) ;
//         done();
//       });;
//   });
// });

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      [1, 2, 3].indexOf(5).should.equal(-1);
      [1, 2, 3].indexOf(0).should.equal(-1);
    });
  });
});
