const mongooose = require('mongoose');
mongoose.connect('mongodb://localhost/businessInfo');

const Business = mongoose.model('Business', {
  name: String,
});