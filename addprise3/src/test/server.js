import supertest from 'supertest';

import app from '../app.js'

function request(){
	return supertest(app.listen());
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

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      [1,2,3].indexOf(5).should.equal(-1);
      [1,2,3].indexOf(0).should.equal(-1);
    });
  });
});