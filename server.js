// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Article Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("MONGODB_URI: mongodb://heroku_n6qbzhk0:uqnl1gbd7o10js1sr3jurfon2o@ds123534.mlab.com:23534/heroku_n6qbzhk0");
// 
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api/saved", function(req, res) {

// We will find all the records, sort it in descending order, then limit the records to 5
  Article.find({}).sort([
    ["date", "descending"]
  ]).limit(5).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// This is the route we will send POST requests to save each search.
app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);

  console.log("BODY: " + req.body);

  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

app.delete("/api/saved", function(req, res){

  var url = req.param("url");

  Article.find({ url: url }).remove().exec(function(err){
    if (err) throw "err";
    else {
      res.send("Good-bye!");
    }
  });
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// -------------------------------------------------

// App listening on port 3000
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
