// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var nytAuthKey = "b99d0ad1edea48909f9df2c639e0f164";

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to locate article.
  runQuery: function(NYTsearch, begin_date, end_date) {

    // Figure out the geolocation
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + nytAuthKey + "q=";
      console.log(queryURL);
      return axios.get(queryURL).then(function(NYTsearch) {
        for (var i =0; i < numArticles; i++){
        // If get gets a result, return that result's formatted address property
        if (NYTsearch.response.docs[i].main !== "null") {
          console.log(NYTsearch.response.doc[i].main)
          
          return response.data.docs[i].main.formatted;
        }
        // If we don't get any results, return an empty string
        return "";
        }
      });
  },

  // This function hits our own server to retrieve the record of query results
  // getHistory: function() {
  //   return axios.get("/api");
  // },

  // // This function posts new searches to our database.
  // postHistory: function(data) {
  //   return axios.post("/api", { data: data });
  // }
};

// We export the API helper
module.exports = helper;
