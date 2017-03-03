import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<div>This is a big photo</div>
			</div>
		);
	}
});