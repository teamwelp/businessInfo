const express = require('express');
const dbInsert = require('../database/db-insert');

const app = express();

app.use('/biz/:bizId', express.static( __dirname + '/../public'));
app.use('/biz/:bizId', express.static( __dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/id/:bizId', (req, res) => {
  dbInsert(req.params.bizId)
    .then((data) => {
      res.status(200).send(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => console.log('listening on port 3000') );
