const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container){
  this.container = container
}

CountryInfoView.prototype.bindEvents = function (){
  PubSub.subscribe('Country:selectedCountry', (event) => {
    const country = event.detail;
    this.show(country);
    console.log(country);
  });
};

CountryInfoView.prototype.show = function(country){
  const countryName = document.createElement('h1');
  countryName.textContent = country.name;
  this.container.appendChild(countryName);

  const countryRegion = document.createElement('h2');
  countryRegion.textContent = country.region;
  this.container.appendChild(countryRegion);

  const countryFlag = document.createElement('img');
  countryFlag.src = country.flag;
  this.container.appendChild(countryFlag);

  const countryLanguages = document.createElement('ul');
  this.container.appendChild(countryLanguages);
  const allLanguages = country.languages;
  allLanguages.forEach((language) => {
    const languageli = document.createElement('li');
    languageli.textContent = language.name;
    countryLanguages.appendChild(languageli);
  });
}

module.exports = CountryInfoView;
