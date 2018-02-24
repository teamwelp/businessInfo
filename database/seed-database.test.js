const db = require('./seed-database.js');
const mongoose = require('mongoose');

beforeAll(() => {
  mongoose.connect('mongodb://localhost/businessInfo');
});

describe('helper functions to database', () => {
  let docs = db.makeDocs();
  test('should create array of documents', () => {
    expect(Array.isArray(docs)).toBe(true);
  });
  test('should create array of promises', () => {
    expect(Array.isArray(db.generateSaveDocPromises(docs))).toBe(true);
  });
});

describe('should spin up database and seeded data to database', () => {
  let docs = db.makeDocs();
  test('should add seeded data to database', async () => {
    let docPromises = db.generateSaveDocPromises(docs);
    await db.seedDb(docPromises);
    const result = await db.Business.findById(1).exec();
    expect(result).toBeDefined();
  });
});

afterAll(() => {
  mongoose.disconnect(done);
});