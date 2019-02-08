const PubSub = require ('../helpers/pub_sub.js');

const ResultView = function (container, beer, url){
  this.container = container;
  this.beer = beer;
  // this.url = url;
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


ResultView.prototype.createBeerHeading = function () {
  const name = document.createElement('h2');
  name.classList.add('beer-name');
  if (!this.beer.name) {
    name.textContent = 'Misc';
  }else {
    name.textContent = this.beer.name;
  }
  return name;
};

ResultView.prototype.createBeerList = function () {
  const beersList = document.createElement('ul');
  beersList.classList.add('beers');
  this.populateList(beersList);
  return beersList;
};

ResultView.prototype.populateList = function (list) {
  console.log(this.beer);
  const beerTagLine = document.createElement('li');
  beerTagLine.textContent = `TagLine: ${this.beer.tagline}`;
  list.appendChild(beerTagLine);
};

  // ResultView.prototype.render = function (){
  //   const image = document.createElement("img");
  //   image.classList.add('small-image');
  //   image.src = this.beer.image_url;
  //   this.container.appendChild(image);
// };

module.exports = ResultView;
