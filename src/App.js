import React from 'react';
import Header from './components/Header';
import Albums from './components/Albums';
import Footer from './components/Footer';

const App = React.createClass({
  render() {
    return (
    	<div>
    		<Header />
      		<Albums />
      		<Footer />
      	</div>
    );
  }
});

export default App;