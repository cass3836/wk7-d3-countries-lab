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
}

Country.prototype.getCountry = function(selectedIndex){
  const selectedCountry = this.text[selectedIndex];
  console.log(selectedCountry);
  PubSub.publish('Country:selectedCountry', selectedCountry);
  };
  // const request = new RequestHelper('https://restcountries.eu/rest/v2/all');


module.exports = Country;
