const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Business } = require('./db-helpers');

const makeDocs = (data, numberOfDocs = 200) => {
  let newBusinesses = [];
  for (let i = 0; i < numberOfDocs; i++) {
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
    let saveDocPromise = newBusinesses[i].save((err, data) => {
      console.log('saved!');
    });
    saveDocPromises.push(saveDocPromise);
  }
  return saveDocPromises;
};

module.exports.makeDocs = makeDocs;
module.exports.generateSaveDocPromises = generateSaveDocPromises;
