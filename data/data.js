const _ = require('lodash');
const loremIpsum = require('lorem-ipsum');
const names = require('./names.js');
const namesData = {businesses: names.businesses, users: names.users};

const extractProperty = (data, property) => {
  let arr = [];
  for (let i = 0; i < data.businesses.length; i++) {
    arr.push(data.businesses[i][property]);
  }
  return arr;
};
const generateLinks = (name) => {
  let links = [];
  for (let i = 0; i < name.length; i++) {
    let link = name[i].replace(/\s|\'/g, '').toLowerCase();
    link = 'http://' + link + '.com';
    links.push(link);
  }
  return links;
};
const randomBoolean = () => {
  if (Math.random() * 2 < 1) {
    return false;
  }
  return true;
};
const randomIntegers = (start, end, length = 200) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(_.random(start, end));
  }
  return arr;
};
const randomItemFromArray = (items) => {
  let randArray = randomIntegers(0, items.length);
  for (var i = 0; i < randArray.length; i++) {
    randArray[i] = items[randArray[i]];
  }
  return randArray;
};
const generateRandomLoremIpsum = (sentenceCount, totalNumber = 200) => {
  let randomText = [];
  for (var i = 0; i < 200; i++) {
    randomText.push(loremIpsum({ count: sentenceCount, units: 'sentences' }));
  }
  return randomText;
};
const randomArrayData = (source, arrayLength, totalNumber = 200) => {
  let result = [];
  for (let i = 0; i < totalNumber; i++) {
    let array = [];
    for (let j = 0; j < arrayLength; j++) {
      array.push(randomItemFromArray(source));
    }
    result.push(array);
  }
  return result;
};

const generateFakeData = (mockupData = {}) => {
  // extract names and ids from businesses
  mockupData.id = extractProperty(namesData, 'id');
  mockupData.name = extractProperty(namesData, 'name');
  // calculated data - based on another field
  mockupData.businessLink = generateLinks(mockupData.name);
  // Generate random Boolean values for each 
  const booleanFields = ['claimedByOwner', 'acceptsCreditCards', 'bikeParking', 'goodForKids', 'byApptOnly', 'isYelpAdvertiser'];
  for (let i = 0; i < booleanFields.length; i++) {
    mockupData[booleanFields[i]] = [];
    for (let j = 0; j < 200; j++) {
      mockupData[booleanFields[i]].push(randomBoolean());
    }
  }
  // integer generation
  mockupData.addressZip = randomIntegers(94102, 94105);
  mockupData.priceRangeScale = randomIntegers(1, 4);
  mockupData.priceRangeLow = randomIntegers(11, 30);
  mockupData.priceRangeRange = randomIntegers(5, 20);
  mockupData.healthInpection = randomIntegers(70, 100);
  mockupData.addressNumber = randomIntegers(75, 1547);
  mockupData.phoneOfficeCode = randomIntegers(303, 979);
  mockupData.phoneLineCode = randomIntegers(1001, 9009);
  // fixed data - same for all 200
  mockupData.phoneAreaCode = new Array(200).fill(415);
  mockupData.addressCity = new Array(200).fill('San Francisco');
  mockupData.addressState = new Array(200).fill('CA');
  // random string values
  const streets = ['Howard Street', 'Mission Street', 'Market Street'];
  mockupData.addressStreet = randomItemFromArray(streets);
  mockupData.longDescription = generateRandomLoremIpsum(10);
  //generate random arrays
  const metatags = ['Seafood', 'Bars', 'Ramen', 'Fusion', 'Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Soul Food', 'Burgers', 'Waffles', 'Desserts', 'Bakeries', 'Coffee'];
  mockupData.metatags = randomArrayData(metatags, 4);
  const carTags = ['Street', 'Garage, Validated', 'Garage, Paid', 'Parking Lot', 'Valet'];
  mockupData.carParking = randomArrayData(carTags, 2);
  return mockupData;
};

module.exports = generateFakeData;
