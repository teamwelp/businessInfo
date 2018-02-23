// Generate a consistent set of 200 fake restaurant names
const names = ['Oleg\'s', 'Nick\'s', 'John\'s', 'Melvin\'s', 'Andrea\'s', 'Toby\'s'];
const food = ['Burger', 'Pizza', 'Hot Dog', 'Sandwich', 'Sushi', 'Curry'];
const suffix = ['Palace', 'Fusion', 'Saloon', 'Reactor', 'Emporium', 'Shack', 'Buffet'];
let mockupData = { businesses: [], users: [] };
let count = 200;
for (let i = 0; i < names.length; i++) {
  for (let j = 0; j < food.length; j++) {
    for (let k = 0; k < suffix.length; k++) {
      let businessName = names[i] + ' ' + food[j] + ' ' + suffix[k];
      mockupData.businesses.push({ id: count, name: businessName });
      count++;
    }
  }
}
mockupData.businesses = mockupData.businesses.slice(0, 200);

module.exports.businesses = mockupData.businesses;
