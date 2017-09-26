// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// NYT API
var nytAuthKey = "b99d0ad1edea48909f9df2c639e0f164";

// Helper functions for making API Calls
var helpers = {

  // This function serves our purpose of running the query to locate article.
  runQuery: function(NYTsearch, begin_date, end_date) {

    var formattedTerm = NYTsearch.trim();
    var formattedStart = begin_date.trim() + "0101";
    var formattedEnd = end_date.trim() + "1231"

    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";
      console.log(queryURL);

    return axios.get(queryURL, {
      params: {
        "api-key": nytAuthKey,
        "q": formattedTerm,
        "begin_date": formattedStart,
        "end_date": formattedEnd
      }
    }).then(function(results){
      if (results.data.response !== "null") {
        console.log("Axios Results", results.data.response);
        return results.data.response;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results){
        console.log("axios results ", results);
        return results;
      });
  },

  // // This function posts new searches to our database.
  postSaved: function(title, date, url) {
    var newArticle = { title: title, date: date, url: url };
    return axios.post("/api/saved", newArticle)
      .then(function(response){
        console.log("axios results ", response.data._id);
        return response.data._id;
      });
  },

  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    }).then(function(results){
      console.log("axios results", results);
      return results;
    });
  }
};

// We export the API helpers
module.exports = helpers;
