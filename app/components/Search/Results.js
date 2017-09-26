// Include React
var React = require("react");

var helpers = require("../../utils/helpers.js");

// Creating the Results component
export class Results extends React.Components({
  
  getInitialState: function(){
    return {
      title: "",
      url: "",
      pubdate: ""
    };
  },

  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

    helpers.postSaved(item.headline.main, item.pub.date, item.web_url).then(function(){
      console.log(item.web_url);
    });
  },

  // Here we render the function
  renderArticles: function() {
    return this.props.results.docs.map(function(article, index) {
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.headline.main}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default"> View Article </button>
                </a>
                  <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save</button>
              </span>
            </h3>
            <p> Date Published: {article.pub_date}</p>
          </li>
        </div>
      );
    }.bind(this));
  },

  render: function() {
    if(!this.props.results.docs){
      return (  
        <div className="main-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title text-center">Results</h3>
                </div>  
                <div className="panel-body text-center">
                  <li className="list-group"> {this.renderArticles()}
                  </li>
                </div>
              </div>        
            </div>
          </div>
        </div>
      );
    }
  },

});

module.exports = Results;