const SelectView = require('./views/select_view.js');
const Country = require('./models/country.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.getData();

  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();
});
