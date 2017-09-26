var React = require("react");

var helpers = require("../utils/helpers");

var Main = React.createClass({

	getInitialState: function(){
		return { savedArticles: ""};
	},

	componentDidMount: function(){
		helpers.getSaved().then(function(articleData){
			this.setState({ savedArticles: articleData.data });
		}.bind(this));
	},

	handleClick: function(item) {

		helpers.deleteSaved(item.title, item.date, item.url).then(function(){

			helpers.getSaved().then(function(articleData){
				this.setState({ savedArticles: articleData.data });
			}.bind(this));
		// ending for helpers.deleteSaved
		}.bind(this));
	},

// only runs when there are no saved articles
	renderEmpty: function(){
		return (
			<li>
				<h3>Save your first article...</h3>
			</li>
		);
	},

	renderArticles: function() {
		return (
			<div key={index}>
				<li className="list-group-item">
					<h3>
						<span>
							<em>{article.title}</em>
						</span>
						<span className="btn-group pull-right">
							<a href={article.url} rel="noopener noreferrer" target="_blank">
								<button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
							</a>
						</span>
					</h3>
					<p>Date Published: {article.date}</p>
				</li>
			</div>
		);
	}.bind(this),

	renderContainer: function(){
		return(
			<div className="main-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"> Saved Article </h1>
							</div>
							<div className="panel-body">
								<ul className="list-group">
								 {this.renderArticles()}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},

	render: function() {
		if (!this.state.savedArticles){
			return this.renderEmpty();
		}
		return this.renderContainer();
	}
});

module.exports = Main;