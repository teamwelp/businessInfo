const data = require('./data.js');

const fakeData = data();
// booleanFields 
const booleanFields = ['claimedByOwner', 'acceptsCreditCards', 'bikeParking', 'goodForKids', 'byApptOnly', 'isYelpAdvertiser'];
const integerFields = ['id', 'addressZip', 'priceRangeScale', 'priceRangeLow', 'priceRangeRange', 'healthInpection', 'addressNumber', 'phoneOfficeCode', 'phoneLineCode'];
const randomStringFields = ['name', 'addressStreet', 'longDescription'];
const fixedFields = ['addressCity', 'addressState', 'phoneAreaCode'];
const arrayOfStrings = ['metatags', 'carParking'];

const hasRequisiteFields = (fields) => {
  for (var i = 0; i < fields.length; i++) {
    expect(fakeData).toHaveProperty(fields[i]);
  }
};

describe('fake data generation', () => {
  test('should generate an object', () => {
    expect(typeof fakeData).toBe('object');
  });
});

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
    console.log(Object.keys(fakeData));
    console.log(Object.keys(fakeData).length);
  });

  test('should have random integer values (this test may sometimes fail)', () => {
    integerFields.forEach( (field) => {
      expect(fakeData[field][0] === fakeData[field][199]).toBe(false);
    });
  });
});
