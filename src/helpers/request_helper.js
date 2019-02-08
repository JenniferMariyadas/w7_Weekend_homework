const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function () {
  return fetch(this.url)
  .then((response) => response.json());
   console.log(response);
};

module.exports = Request;
