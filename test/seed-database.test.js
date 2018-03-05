const mongoose = require('mongoose');
const { Business } = require('../database/db-helpers');
const { allFields, hasRequisiteFields } = require('./helpers.js');

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost/businessInfo');
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('should have seeded data in database', () => {
  test('should have data with correct fields in database', (done) => {
    Business.find({ id: 201 }).exec((err, result) => {
      if (err) { throw err; }
      expect(result).toBeDefined();
      hasRequisiteFields(allFields, result[0]);
      done();
    });
  }); 
  test('should have 200 records in database', (done) => {
    Business.find({}).exec((err, result) => {
      if (err) { throw err; }
      expect(result.length).toBe(200);
      done();
    });
  });
});
