const booleanFields = ['claimedByOwner', 'acceptsCreditCards', 'bikeParking', 'goodForKids', 'byApptOnly', 'isYelpAdvertiser'];
const integerFields = ['addressNumber', 'addressZip', 'healthInspection', 'id', 'phoneLineCode', 'phoneOfficeCode', 'priceRangeLow', 'priceRangeRange', 'priceRangeScale'];
const stringFields = ['name', 'addressStreet', 'longDescription'];
const arrayOfStringFields = ['carParking', 'metatags'];
const fixedFields = ['addressCity', 'addressState', 'phoneAreaCode'];
const objectField = 'hours';
const calculatedStringField = 'businessLink';

module.exports.hasRequisiteFields = (fields, fakeData) => {
  for (var i = 0; i < fields.length; i++) {
    expect(fakeData).toHaveProperty(fields[i]);
  }
};
module.exports.isRandom = (fields, fakeData) => {
  fields.forEach((field) => {
    expect(fakeData[field][0] === fakeData[field][199]).toBe(false);
  });
};

module.exports.booleanFields = booleanFields;
module.exports.integerFields = integerFields;
module.exports.stringFields = stringFields;
module.exports.arrayOfStringFields = arrayOfStringFields;
module.exports.fixedFields = fixedFields;
module.exports.objectField = objectField;
module.exports.calculatedStringField = calculatedStringField;
module.exports.allFields = [].concat(booleanFields, integerFields, stringFields, arrayOfStringFields, fixedFields, [objectField, calculatedStringField]);