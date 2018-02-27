const data = require('../data/data.js');

const fakeData = data();
const booleanFields = ['claimedByOwner', 'acceptsCreditCards', 'bikeParking', 'goodForKids', 'byApptOnly', 'isYelpAdvertiser'];
const integerFields = ['addressNumber', 'addressZip', 'healthInpection', 'id', 'phoneLineCode', 'phoneOfficeCode', 'priceRangeLow', 'priceRangeRange', 'priceRangeScale'];
const stringFields = ['name', 'addressStreet', 'longDescription'];
const arrayOfStringFields = ['carParking', 'metatags'];
const fixedFields = ['addressCity', 'addressState', 'phoneAreaCode'];
const objectField = 'hours';
const calculatedStringField = 'businessLink';

const hasRequisiteFields = (fields) => {
  for (var i = 0; i < fields.length; i++) {
    expect(fakeData).toHaveProperty(fields[i]);
  }
};

const isRandom = (fields) => {
  fields.forEach((field) => {
    expect(fakeData[field][0] === fakeData[field][199]).toBe(false);
  });
};

describe('fake data generation', () => {
  test('should generate an object', () => {
    expect(typeof fakeData).toBe('object');
  });
  test('should have 25 properties', () => {
    expect(Object.keys(fakeData).length).toBe(25);
  });
  test('should have properties containing arrays with length 200', () => {
    for (var key in fakeData) {
      expect(fakeData[key].length).toBe(200);
    }
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

  test('should have boolean values', () => {
    for (var i = 0; i < booleanFields.length; i++) {
      expect(typeof fakeData[booleanFields[i]][0]).toBe('boolean');
    }
  });
});

describe('random integer generation', () => {
  test('should have the requisite integer fields', () => {
    hasRequisiteFields(integerFields);
  });

  test('should have integer values', () => {
    integerFields.forEach( (field) => {
      expect(typeof fakeData[field][0]).toBe('number');
    });
  });

  test('should be randomly generated (will sometimes fail)', () => {
    integerFields.forEach( (field) => {
      expect(fakeData[field][0] === fakeData[field][199]).toBe(false);
    });
  });
});

describe('random string generation', () => {
  test('should have the requisite fields', () => {
    hasRequisiteFields(stringFields);
  });
  test('should have string values', () => {
    stringFields.forEach( (field) => {
      expect(typeof fakeData[field][0]).toBe('string');
    });
  });
  test('should be randomly generated (will sometimes fail)', () => {
    isRandom(stringFields);
  });
});

describe('random array generation', () => {
  test('should have the requisite fields', () => {
    hasRequisiteFields(arrayOfStringFields);
  });
  test('should have array values', () => {
    arrayOfStringFields.forEach((field) => {
      expect(Array.isArray(fakeData[field][0])).toBe(true);
    });
  });
  test('should be randomly generated', () => {
    isRandom(arrayOfStringFields);
  });
});

describe('fixed fields generation', () => {
  test('should have the requisite fields', () => {
    hasRequisiteFields(arrayOfStringFields);
  });
  test('should all be equal', () => {
    fixedFields.forEach( (field) => {
      console.log(field);
      expect(fakeData[field][0]).toEqual(fakeData[field][199]);
    });
  });
});

describe('hours object generation', () => {
  test('should have hours property', () => {
    expect(fakeData).toHaveProperty('hours');
  });
  test('should have objects with Mon and Tue properties', () => {
    expect(typeof fakeData.hours).toBe('object');
    expect(fakeData.hours[0]).toHaveProperty('Mon');
    expect(fakeData.hours[0]).toHaveProperty('Tue');
  });
  test('Mon property should be object with open and close properties', () => {
    expect(typeof fakeData.hours[0].Mon).toBe('object');
    expect(fakeData.hours[0].Mon.open).toBeDefined();
    expect(fakeData.hours[0].Mon.close).toBeDefined();
  });
});

describe('calculated string field', () => {
  test('should have businessLink field', () => {
    expect(fakeData).toHaveProperty('businessLink');
  });
  test('should have string values', () => {
    expect(typeof fakeData.businessLink[0]).toBe('string');
  });
});