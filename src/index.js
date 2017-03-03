import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './App';
import Albums from './components/Albums';
import Album from './components/Album';
import Photo from './components/Photo';

const router = (
	<Router history={browserHistory} onUpdate={() => {
		window.scrollTo(0, 0);
	}}>
		<Route path="/" component={App}>
			<IndexRoute component={Albums} />
			<Route path="/:albumName" component={Album} />
			<Route path="/:albumName/:photoId" component={Photo} />
		</Route>
	</Router>
);


ReactDOM.render(router, document.getElementById('root'));