const mongoose = require('mongoose');
const {Business} = require('./db-helpers');

beforeAll(() => {
  mongoose.connect('mongodb://localhost/businessInfo');
});

describe('should check for seeded data to database', () => {
  test('should add seeded data to database', done => {
    Business.find({id: 201}).exec( (err, result) => {
      if (err) { console.log(err); }
      expect(result).toBeDefined();
      done();
    });
  }); 
});

afterAll(() => {
  mongoose.disconnect();
});
