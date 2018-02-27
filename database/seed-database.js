const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const generateFakeData = require('../data/data.js');
const {makeDocs, generateSaveDocPromises} = require('./seed-helpers');

const data = generateFakeData();
const docs = makeDocs(data);
const docPromises = generateSaveDocPromises(docs);

const seedDb = (docPromises) => {
  return mongoose.connect('mongodb://localhost/businessInfo')
    .then(mongoose.connection.dropDatabase())
    .then(Promise.all(docPromises))
    .then( () => {
      mongoose.connection.close();
    })
    .catch( (error) => {
      console.log(error);
    });
};

seedDb(docPromises);
