const data = require('./data.js');

const fakeData = data();
const booleanFields = ['claimedByOwner', 'acceptsCreditCards', 'bikeParking', 'goodForKids', 'byApptOnly', 'isYelpAdvertiser'];
const integerFields = ['addressZip', 'priceRangeScale', 'priceRangeLow', 'priceRangeRange', 'healthInpection', 'addressNumber'];
const stringFields = ['']

const hasRequisiteFields = (fields) => {
  for (var i = 0; i < fields.length; i++) {
    expect(fakeData).toHaveProperty(fields[i]);
  }
};

describe('fake data generation', () => {
  test('should generate an object', () => {
    expect(typeof fakeData).toBe('object');
  });
})

describe('boolean value generation', () => {
  test('should have the requisite boolean fields', () => {
    hasRequisiteFields(booleanFields);
  });

  test('should have boolean fields of length 200', () => {
    for (var i = 0; i < booleanFields.length; i++) {
      expect(fakeData[booleanFields[i]]).toHaveLength(200);
    }
  });

  test('should have boolean fields that contain boolean values', () => {
    for (var i = 0; i < booleanFields.length; i++) {
      expect(typeof fakeData[booleanFields[i]][0]).toBe('boolean');
    }
  });
});

describe('random integer generation', () => {
  test('should have the requisite integer fields', () => {
    hasRequisiteFields(integerFields);
  });

  test('should have integer fields that contain integer values', () => {
    integerFields.forEach( (field) => {
      expect(typeof fakeData[field][0]).toBe('number');
    });
  });
});
