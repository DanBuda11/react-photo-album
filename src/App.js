import React from 'react';
import { Link } from 'react-router';
import './App.css';
import data from './data';

const App = React.createClass({
	getInitialState() {
		return {data: data}
	},
  	render() {
	    const childrenWithProps = React.Children.map(this.props.children,
	    	(child) => React.cloneElement(child, {
	    		albums: this.state.data
	    	}));
	    return (
	    	<div>
	    		<div className="header">
	    			<h1>
	    				<Link to="/">React Photo Album</Link>
	    			</h1>
	    			{childrenWithProps}
	      		</div>
	      		<footer>
	      			<h1>Footer</h1>
	      		</footer>
	      	</div>
	    );
	}
});

export default App;