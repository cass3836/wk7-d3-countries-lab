const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
}
SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:allData', (event) =>{
    const allCountries = event.detail;
    this.populate(allCountries);
  });
}

SelectView.prototype.populate = function(allCountries){
  allCountries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
}

module.exports = SelectView;