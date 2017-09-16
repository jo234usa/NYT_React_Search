var Articles = require ("./models/Articles.js")

module.exports = function(app) {
	app.get("api/saved", function(req, res)
	{
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
	})
}