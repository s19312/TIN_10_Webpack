const temp = require('./temperatureConverter.js');
const dist = require('./distanceConverter.js');

document
  .getElementById('b1')
  .addEventListener('click', temp.temperatureConverter);
document.getElementById('b2').addEventListener('click', dist.distanceConverter);
