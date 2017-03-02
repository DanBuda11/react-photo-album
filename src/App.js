import React from 'react';
import './App.css';
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
	    		<div className="page-wrap">
	    			<Header />
	      			<Albums albums={this.state.data} />
	      		</div>
	      		<Footer />
	      	</div>
	    );
	}
});

export default App;