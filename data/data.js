const _ = require('lodash');
const loremIpsum = require('lorem-ipsum');
const names = require('./names.js');

const namesData = { businesses: names.businesses, users: names.users };

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
    let link = name[i].replace(/\s|'/g, '').toLowerCase();
    link = `http://www.${link}.com`;
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
const generateRandomLoremIpsum = (sentenceCount, totalNumber = 200) => {
  let randomText = [];
  for (let i = 0; i < totalNumber; i += 1) {
    randomText.push(loremIpsum({ count: sentenceCount, units: 'sentences' }));
  }
  return randomText;
};
const randomIntegers = (start, end, length = 200) => {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(_.random(start, end - 1));
  }
  return arr;
};
const randomItemFromArray = (items, arrayLength = items.length) => {
  const randArray = randomIntegers(0, items.length, arrayLength);
  for (let i = 0; i < randArray.length; i += 1) {
    randArray[i] = items[randArray[i]];
  }
  return randArray;
};
const generateRandomArrayOfItems = (source, arrayLength, totalNumber = 200) => {
  let result = [];
  for (let i = 0; i < totalNumber; i++) {
    result.push(randomItemFromArray(source, arrayLength));
  }
  return result;
};

const makeHours = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let hours = {};
  let hourStartArray = randomIntegers(8, 11, 1);
  let hourCloseArray = randomIntegers(14, 22, 1);
  let weekendStartArray = randomIntegers(10, 11, 1);
  let weekendCloseArray = randomIntegers(17, 23, 1);
  for (let i = 0; i < days.length; i++) {
    hours[days[i]] = {};
    if (i < 5) {
      hours[days[i]].open = hourStartArray[0];
      hours[days[i]].close = hourCloseArray[0];
    } else {
      hours[days[i]].open = weekendStartArray[0];
      hours[days[i]].close = weekendCloseArray[0];
    }
  }
  return hours;
};

const makeHoursArray = (length = 200) => {
  let hoursArray = [];
  for (let i = 0; i < length; i++) {
    hoursArray.push(makeHours());
  }
  return hoursArray;
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
  mockupData.healthInspection = randomIntegers(70, 100);
  mockupData.addressNumber = randomIntegers(75, 1547);
  mockupData.phoneOfficeCode = randomIntegers(303, 979);
  mockupData.phoneLineCode = randomIntegers(1001, 9009);
  // fixed data - same for all 200
  mockupData.phoneAreaCode = new Array(200).fill(415);
  mockupData.addressCity = new Array(200).fill('San Francisco');
  mockupData.addressState = new Array(200).fill('CA');
  // random string values
  const streets = ['Howard Street', 'Mission Street', 'Market Street'];
  mockupData.addressStreet = randomItemFromArray(streets, 200);
  mockupData.longDescription = generateRandomLoremIpsum(10);
  // generate random arrays
  const metatags = ['Seafood', 'Bars', 'Ramen', 'Fusion', 'Breakfast', 'Brunch', 'Lunch', 'Dinner', 'Soul Food', 'Burgers', 'Waffles', 'Desserts', 'Bakeries', 'Coffee'];
  mockupData.metatags = generateRandomArrayOfItems(metatags, 4);
  const carTags = ['Street', 'Garage, Validated', 'Garage, Paid', 'Parking Lot', 'Valet'];
  mockupData.carParking = generateRandomArrayOfItems(carTags, 2);
  // generate restaurant hours
  mockupData.hours = makeHoursArray();
  return mockupData;
};

module.exports = generateFakeData;
