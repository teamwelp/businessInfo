const mongoose = require('mongoose');
const {Business} = require('./db-helpers');

beforeAll( async () => {
  await mongoose.connect('mongodb://localhost/businessInfo');
});

afterAll( async () => {
  await mongoose.disconnect();
})

describe('should have seeded data in database', () => {
  test('should have data in database', done => {
    Business.find({id: 201}).exec( (err, result) => {
      if (err) { console.log(err); }
      expect(result).toBeDefined();
      done();
    });
  }); 
  test('should have 200 records in database', done => {
    Business.find({}).exec((err, result) => {
      if (err) { console.log(err); }
      expect(result.length).toBe(200);
      done();
    });
  });
});
