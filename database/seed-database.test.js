const db = require('./seed-database.js');
const mongooose = require('mongoose');

beforeAll(() => {
  mongoose.connect('mongodb://localhost/businessInfo');
});

describe('should spin up database and seeded data to database', () => {
  test('should add seeded data to database', async () => {
    await db.seedDb();
    const result = await db.Business.findById(1).exec();
    expect(result).toBeDefined();
  });
});

afterAll(() => {
  mongooose.disconnect(done);
});