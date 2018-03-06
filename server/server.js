const express = require('express');
const app = express();

app.use(express.static( __dirname + '/../public'));
app.use(express.static( __dirname + '/../client/dist'));

app.get('/', (req, res) => {
  res.status(200).send();
});

app.listen(3000, () => console.log('listening on port 3000') );
