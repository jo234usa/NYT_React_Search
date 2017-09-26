var React = require("react");

var router = require("react-router");

var Route = router.Route;

var IndexRoute = router.IndexRoute;

var Router = router.Router;

var browserHistory = router.browserHistory;

var Main = require("../components/children/Main");
var Results = require("../components/children/Results");
var History = require("../components/children/History");

module.exports = (
	<Router history={browserHistory}>
		<Route path="/" component={Main}>

		<Route path="Results" component={Results} />
		<Route path="History" component={History} />

		<IndexRoute component={Results} />

		</Route>
	</Router>	
);