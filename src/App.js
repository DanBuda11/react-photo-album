import React from 'react';
import Header from './components/Header';
import Albums from './components/Albums';
import Footer from './components/Footer';
import data from './data';

const App = React.createClass({
	getInitialState() {
		return {data: data}
	},
  	render() {
	    return (
	    	<div>
	    		<Header />
	      		<Albums albums={this.state.data} />
	      		<Footer />
	      	</div>
	    );
	}
});

export default App;