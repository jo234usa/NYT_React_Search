import React from "react";

import Link from "react-router";

import Query from "./Search/Query";
import Results from "./Search/Results";
import Main from "./History";

import helpers from "./utils/helpers";

export class Main extends React.Component({

//What we're filling our div, id'ed app on Index.html with
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="jumbotron">
						<h1 className="text-center">The New New York Times Search:</h1>
						<h2 className="text-center">Now Featuring React!</h2>
					</div>
				</div>

				<div className="col-lg-12">
					<Query onSubmit={this.prop.children}/>
				</div>
				
				<div className="col-lg-12">
					<br />
					<Results />
				</div>

				<div className="col-lg-12">
					<Main />
				</div>

			</div>
		);
	}	
});