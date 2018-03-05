const mongoose = require('mongoose');
const generateFakeData = require('../data/data.js');
const { makeDocs, generateSaveDocPromises } = require('./seed-helpers');

mongoose.Promise = global.Promise;
const data = generateFakeData();
const docs = makeDocs(data);
const promises = generateSaveDocPromises(docs);

const seedDb = (docPromises) => {
  return mongoose.connect('mongodb://localhost/businessInfo')
    .then(mongoose.connection.dropDatabase())
    .then(Promise.all(docPromises))
    .then(() => {
      mongoose.connection.close();
    })
    .catch((error) => {
      throw error;
    });
};

seedDb(promises);
