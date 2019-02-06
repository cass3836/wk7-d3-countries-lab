const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Country = function() {
  this.text = null;
}

Country.prototype.getData = function(){
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    PubSub.publish('Country:allData', this.text);
    // console.log(this.text);
    });
    PubSub.subscribe('SelectView:selected-index', (event) => {
      const selectedIndex = event.detail;
      console.log(this);
      this.getCountry(selectedIndex)
      // console.log(selectedIndex);
    });
    PubSub.subscribe('CountryInfoView:selectedBorder', (event) => {
      const selectedBorder = event.detail;
      this.getIndex(selectedBorder);
    });
}

Country.prototype.getCountry = function(selectedIndex){
  const selectedCountry = this.text[selectedIndex];
  console.log(selectedCountry);
  PubSub.publish('Country:selectedCountry', selectedCountry);
  };

  Country.prototype.getIndex = function(selectedBorder){
    let actualResult = ''
    const result = this.text.map((country) => {
      return country.alpha3Code;
    })
      .forEach((code, index) => {
        if (code === selectedBorder) {
          actualResult = index;
          return actualResult;
        }

      });
    // return result;
    console.log(actualResult);
    this.getCountry(actualResult);
  }


module.exports = Country;
