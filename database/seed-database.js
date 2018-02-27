const generateFakeData = require('../data/data.js');
const mongoose = require('mongoose');
const data = generateFakeData();
const { Business } = require('./db-helpers');

const makeDocs = () => {
  let newBusinesses = [];
  for (let i = 0; i < 200; i++) {
    let newBusiness = new Business({
      carParking: data.carParking[i],
      metatags: data.metatags[i],
      acceptsCreditCards: data.acceptsCreditCards[i],
      bikeParking: data.bikeParking[i],
      byApptOnly: data.byApptOnly[i],
      claimedByOwner: data.claimedByOwner[i],
      goodForKids: data.goodForKids[i],
      isYelpAdvertiser: data.isYelpAdvertiser[i],
      id: data.id[i],
      phoneAreaCode: data.phoneAreaCode[i],
      addressNumber: data.addressNumber[i],
      healthInspection: data.healthInspection[i],
      phoneLineCode: data.phoneLineCode[i],
      phoneOfficeCode: data.phoneOfficeCode[i],
      priceRangeLow: data.priceRangeLow[i],
      priceRangeRange: data.priceRangeRange[i],
      priceRangeScale: data.priceRangeScale[i],
      hours: data.hours[i],
      businessLink: data.businessLink[i],
      addressCity: data.addressCity[i],
      addressState: data.addressState[i],
      addressStreet: data.addressStreet[i],
      addressZip: data.addressZip[i],
      longDescription: data.longDescription[i],
      name: data.name[i],
    });
    newBusinesses.push(newBusiness);
  }
  return newBusinesses;
};

const generateSaveDocPromises = (newBusinesses) => {
  saveDocPromises = [];
  for (let i = 0; i < newBusinesses.length; i++) {
    let saveDocPromise = new Promise( (resolve, reject) => {
      newBusinesses[i].save( (err, data) => {
        console.log('saved!');
        resolve(data);
      });
    });
    saveDocPromises.push(saveDocPromise);
  }
  return saveDocPromises;
};

const docs = makeDocs();
const docPromises = generateSaveDocPromises(docs);

const seedDb = () => {
  mongoose.connect('mongodb://localhost/businessInfo')
    .then(mongoose.connection.dropDatabase())
    .then(Promise.all(saveDocPromises))
    .then( () => {
      mongoose.connection.close();
    })
    .catch( (error) => {
      console.log(error);
    });
};

seedDb();

module.exports.makeDocs = makeDocs;
module.exports.generateSaveDocPromises = generateSaveDocPromises;
module.exports.Business = Business;
module.exports.seedDb = seedDb;
