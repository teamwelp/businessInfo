const generateFakeData = require('../data/data.js');
const mongoose = require('mongoose');
const data = generateFakeData();
mongoose.connect('mongodb://localhost/businessInfo');

const HoursForDay = mongoose.Schema({
  open: Number,
  close: Number,
});

const Hours = mongoose.Schema({
  Sun: HoursForDay,
  Mon: HoursForDay,
  Tue: HoursForDay,
  Wed: HoursForDay,
  Thu: HoursForDay,
  Fri: HoursForDay,
  Sat: HoursForDay,
});

const businessSchema = mongoose.Schema({
  carParking: Array,
  metatags: Array,
  acceptsCreditCards: Boolean,
  bikeParking: Boolean,
  byApptOnly: Boolean,
  claimedByOwner: Boolean,
  goodForKids: Boolean,
  isYelpAdvertiser: Boolean,
  id: Number,
  phoneAreaCode: Number,
  addressNumber: Number,
  healthInspection: Number,
  phoneLineCode: Number,
  phoneOfficeCode: Number,
  priceRangeLow: Number,
  priceRangeRange: Number,
  priceRangeScale: Number,
  hours: Hours,
  businessLink: String,
  addressCity: String,
  addressState: String,
  addressStreet: String,
  addressZip: String,
  longDescription: String,
  name: String,
});

const Business = mongoose.model('Business', businessSchema);

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
        resolve(data);
      });
    });
  }
};

const seedDb = () => {
  Promise.all([])
    .then(mongoose.disconnect());
};

module.exports.makeDocs = makeDocs;
module.exports.Business = Business;
module.exports.seedDb = seedDb;

mongoose.disconnect();
