const express = require('express');
const dbFind = require('../database/db-find');

const app = express();

app.use('/biz/:bizId', express.static(__dirname + '/../public'));

app.get('/id/:bizId', (req, res) => {
  dbFind(req.params.bizId)
    .then((data) => {
      res.status(200).send(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(3000, () => console.log('listening on port 3000') );
