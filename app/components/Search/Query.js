var React = require("react");

var Query = React.createClass({
	
	getInitialState: function(){
		return {
			search: "",
			start: "",
			end: ""
		};
	},

	handleChange: function(event){
		console.log("TEXT CHANGED");

		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},

	handleSubmit: function(event){
		event.preventDefault();
		console.log("CLICKED");
		this.props.updateSearch(this.state.search, this.state.start, this.state.end);
	},

	render: function() {

		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search</h3>
				</div>

				<div className="panel-body text-center">
					<form onSubmit={this.handleSubmit} role="form">
						<div className="form-group">
							<label>Topic</label>
							<input type="text" placeholder="Enter Search term to begin" className="form-control" id="search" onChange={this.handleChange} required />
						</div>

						<div className="form-group">
							<label>Start Year</label>
							<input value={this.state.start} type="number" min="0101" max="2017" className="form-control" id="start-year" onChange={this.handleChange} required />
						</div>

						<div className="form-group">
							<label> End Year</label>
							<input type="number" min="0101" max="2017" value={this.state.end} className="form-control" id="end-year" onChange={this.handleChange} required />
						</div>

						<div className="pull-right">
							<button type="submit" className="btn btn-default" className="center" id="search-btn">Search</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Query;