const { open, find, close } = require('../database/db-find');

describe('test database retrieve', () => {
  test('test db find', async () => {
    open();
    await find(300)
      .then((data) => {
        expect(data[0].id).toBe(300);
      });
    close();
  });
});
