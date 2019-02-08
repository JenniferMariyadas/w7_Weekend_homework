const PubSub = require ('../helpers/pub_sub.js');
const RequestHelper = require ('../helpers/request_helper.js');

const Beers = function () {
  this.data = null;
};

Beers.prototype.getData = function () {
  const url = "https://api.punkapi.com/v2/beers";

  const request = new RequestHelper(url);
  console.log(request);
  request.get()
  .then((beers) => {
    console.log(beers);
    this.data = beers;
    PubSub.publish('Beers:data-ready', this.data);
  })
  .catch((err) => {
    PubSub.publish('Beers:error', err);
  });
};






module.exports = Beers;
