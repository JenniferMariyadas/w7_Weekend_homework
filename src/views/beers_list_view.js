const PubSub = require('../helpers/pub_sub.js');
const ResultView = require('./result_view.js');

const BeerListView = function (container) {
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-ready', (event) => {
    const beers = event.detail;
    console.log(beers);
    this.render(beers);
  });
};

BeerListView.prototype.render = function (beers) {
  beers.forEach((beer) => {
    const resultView = new ResultView(this.container, beer);
    resultView.render();
  });
};


module.exports = BeerListView;
