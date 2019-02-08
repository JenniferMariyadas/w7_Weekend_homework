const PubSub = require ('../helpers/pub_sub.js');

const ResultView = function (container, beer){
this.container = container;
this.beer = beer;
}


ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:data-ready', (evt) => {
    this.beer = evt.detail;
    this.render();
  });
};

ResultView.prototype.render = function () {
  const beerContainer = document.createElement('div');
  beerContainer.classList.add('beer');

  const name = this.createBeerHeading();
  beerContainer.appendChild(name);

  const beerList = this.createBeerList();
  beerContainer.appendChild(beerList);

  this.container.appendChild(beerContainer);
};


ResultView.prototype.createbeerHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('beer-name');
  if (!this.beer.name) {
    name.textContent = 'Misc';
  }else {
    name.textContent = this.beer.name;
  }
  return name;
};




module.exports = ResultView;
