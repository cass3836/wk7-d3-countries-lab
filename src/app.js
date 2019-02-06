const SelectView = require('./views/select_view.js');
const Country = require('./models/country.js');
const CountryInfoView = require('./views/country_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.getData();

  const selectElement = document.querySelector('select#countries');
  const countryDropdown = new SelectView(selectElement);
  countryDropdown.bindEvents();

  const selectContainer = document.querySelector('div#country');
  const countryContainer = new CountryInfoView(selectContainer);
  countryContainer.bindEvents();
});
