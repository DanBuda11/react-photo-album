import React from 'react';
import { Link } from 'react-router';
import './App.css';
import data from './data';
import Albums from './components/Albums';

const App = React.createClass({
	getInitialState() {
		return {data: data}
	},
  	render() {
	    return (
	    	<div>
	    		<div className="header">
	    			<h1>
	    				<Link to="/">React Photo Album</Link>
	    			</h1>
	    			<Albums albums={this.state.data} />
	      		</div>
	      		<footer>
	      			<h1>Footer</h1>
	      		</footer>
	      	</div>
	    );
	}
});

export default App;