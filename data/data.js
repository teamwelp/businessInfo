const _ = require('lodash');

const generateFakeData = () => {
  // Generate a consistent set of 200 fake restaurant names
  const names = ['Oleg\'s', 'Nick\'s', 'John\'s', 'Melvin\'s', 'Andrea\'s', 'Toby\'s'];
  const food = ['Burger', 'Pizza', 'Hot Dog', 'Sandwich', 'Sushi', 'Curry'];
  const suffix = ['Palace', 'Fusion', 'Saloon', 'Reactor', 'Emporium', 'Shack', 'Buffet'];

  let mockupData = {businesses: [], users: []};
  let count = 200;
  for (let i = 0; i < names.length; i++) {
    for (let j = 0; j < food.length; j++) {
      for (let k = 0; k < suffix.length; k++) {
        let businessName = names[i] + ' ' + food[j] + ' ' + suffix[k];
        mockupData.businesses.push({id: count, name: businessName});
        count++;
      }
    }
  }
  mockupData.businesses = mockupData.businesses.slice(0, 200);
  // Generate a consistent set of 200 user names
  const title = ['Count', 'Duke', 'King', 'Empress', 'Princess', 'Esquire'];
  const firstName = ['Melvin', 'Fred', 'Ivy', 'Sue'];
  const suffixUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let userCount = 0;
  for (let i = 0; i < title.length; i++) {
    for (let j = 0; j < firstName.length; j++) {
      for (let k = 0; k < suffixUser.length; k++) {
        let userName = title[i] + firstName[j] + suffixUser[k];
        mockupData.users.push({ id: userCount, name: userName});
        userCount++;
      }
    }
  }
  mockupData.users = mockupData.users.slice(0, 200);
  // Generate random Boolean values for each 
  const randomBoolean = () => {
    if (Math.random() * 2 < 1) {
      return false;
    }
    return true;
  };
  const booleanFields = ['claimedByOwner', 'acceptsCreditCards', 'bikeParking', 'goodForKids', 'byApptOnly', 'isYelpAdvertiser'];
  for (let i = 0; i < booleanFields.length; i++) {
    mockupData[booleanFields[i]] = [];
    for (let j = 0; j < 200; j++) {
      mockupData[booleanFields[i]].push(randomBoolean());
    }
  }
  // integer generation
  const makeRandomArray = (start, end, length = 200) => {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(_.random(start, end));
    }
    return arr;
  }
  mockupData.addressZip = makeRandomArray(94102, 94105);
  mockupData.priceRangeScale = makeRandomArray(1, 4);
  mockupData.priceRangeLow = makeRandomArray(11, 30);
  mockupData.priceRangeRange = makeRandomArray(5, 20);
  mockupData.healthInpection = makeRandomArray(70, 100);
  mockupData.addressNumber = makeRandomArray(75, 1547);

  // const streets = ['Howard Street', 'Mission Street', 'Market Street'];

  return mockupData;
};

module.exports = generateFakeData;
