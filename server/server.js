const express = require('express');
const cors = require('cors');
const { open, find, close } = require('../database/db-find');

const app = express();

app.use(cors());
app.use('/biz/:bizId', express.static(__dirname + '/../public'));

app.get('/id/:bizId', (req, res) => {
  open();
  find(req.params.bizId)
    .then((data) => {
      close();
      res.status(200).send(JSON.stringify(data));
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(9001, () => console.log('listening on port 9001'));
