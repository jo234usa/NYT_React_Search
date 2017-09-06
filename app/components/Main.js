var React = require("react");

var Form = require("./children/Form");
var Results = require("./children/Results");
var History = require("./children/History");

var helpers = require("./utils/helpers");

var Main = React.createClass({
//setting the generic states
	getInitialState: function(){
		return {searchTerm: "", results: "", history:[]};
	},

//What we're filling our div, id'ed app on Index.html with
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1 className="text-center">The New New York Times Search:</h1>
						<h2 className="text-center">Now Featuring React!</h2>
					</div>
				</div>

				<div className="col-lg-12">
					<Form />
				</div>
				
				<div class="col-lg-12">
					<Results />
				</div>

				<div class="col-lg-12">
					<History />
				</div>

			</div>
		);
	}	
});

module.exports = Main;