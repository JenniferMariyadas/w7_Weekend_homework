const Beers = require('./views/beers.js');
const BeersListView = require('./views/beers_list_view.js');
const ErrorView = require('./views/error_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener ('DOMContentLoaded', () => {

  const beerListContainer = document.querySelector("#list-of-beers")
  const beerListView = new BeerListView(beerListContainer);
  beerListView.bindEvents();

  const errorView = new ErrorView(beerListContainer);
  errorView.bindEvents();

  const beers = new. Beers();
  beers.getData();
});
