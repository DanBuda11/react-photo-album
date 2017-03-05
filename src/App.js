// Import React stuff
import React from 'react';
import { Link } from 'react-router';
// Import compiled CSS
import './App.css';
// Import photo album info
import data from './data';

// Create main React component
const App = React.createClass({
	getInitialState() {
		return {data: data}
	},
  	render() {
  		// Clone child components giving them props from the state
	    const childrenWithProps = React.Children.map(this.props.children,
	    	(child) => React.cloneElement(child, {
	    		albums: this.state.data
	    	}));
	    return (
	    	<div>
	    		<div className="page-wrap">
	    			<div className="header">
	    				<h1>
	    					<Link to="/">React Photo Album</Link>
	    				</h1>
	    			</div>
	    			{childrenWithProps}
	      		</div>
	      		<footer>
	      			<h4>A <a href="http://danbuda.com">Dan Buda</a> Project</h4>
	      		</footer>
	      	</div>
	    );
	}
});

export default App;