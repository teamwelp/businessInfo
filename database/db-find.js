const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const { Business } = require('./db-helpers');

module.exports.open = () => {
  mongoose.connect('mongodb://localhost/businessInfo');
}

module.exports.find = (bizId) => {
  return Business.find({ id: bizId }).exec();
};

module.exports.close = () => {
  mongoose.disconnect();
};
