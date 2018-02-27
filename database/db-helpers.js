const mongoose = require('mongoose');

HoursForDay = mongoose.Schema({
  open: Number,
  close: Number,
});

Hours = mongoose.Schema({
  Sun: HoursForDay,
  Mon: HoursForDay,
  Tue: HoursForDay,
  Wed: HoursForDay,
  Thu: HoursForDay,
  Fri: HoursForDay,
  Sat: HoursForDay,
});

businessSchema = mongoose.Schema({
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

module.exports.Business = mongoose.model('Business', businessSchema);
