// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var nytAuthKey = "b99d0ad1edea48909f9df2c639e0f164";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(numArticles, queryURL) {

    // Figure out the geolocation
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAuthKey;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
