import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import Albums from './components/Albums';
import Album from './components/Album';
import Photo from './components/Photo';

ReactDOM.render((
	<Router history={hashHistory} onUpdate={() => {
		window.scrollTo(0, 0);
	}}>
		<Route path="/" component={App}>
			<IndexRoute component={Albums} />
			<Route path="/album" component={Album} />
			<Route path="/photo" component={Photo} />
		</Route>
	</Router>
),  document.getElementById('root'));