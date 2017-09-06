var React = require("react");

var Form = React.createClass({
	render: function(){
		return (
			<div className="panel panel-default">
				
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search</h3>
				</div>

				<div className="panel-body text-center">
					<form role="form">
						<div className="form-group">
							<label for="search">Topic</label>
							<input type="text" className="form-control" id="search" />
						</div>

						<div className="form-group">
							<label for="start-year">Start Year</label>
							<input type="number" min="0101" max="2017" className="form-control" id="start-year" />
						</div>

						<div className="form-group">
							<label for="end-year"> End Year</label>
							<input type="number" min="0101" max="2017" className="form-control" id="end-year" />
						</div>

						<button type="submit" class="btn btn-default" class="center" id="search-btn">Search</button>
					</form>
				</div>
			</div>
		);
	}
//end of Form component	
});

module.exports = Form;