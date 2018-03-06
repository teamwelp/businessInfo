const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { Business } = require('./db-helpers');
mongoose.connect('mongodb://localhost/businessInfo');

module.exports = (bizId) => {
  return Business.find({ id: bizId }).exec();
};
