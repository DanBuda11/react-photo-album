// Import React stuff
import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
	// Render using passed-down props for album image & name
	render() {
		return (
			<div className="thumb" onClick={this.albumClick}>
				<div className="thumbImgWrap">
					<img src={require('./../images/' + this.props.img)} alt={this.props.name} />
				</div>
				<h3 className="thumbTitle">{this.props.name}</h3>
			</div>
		);
	},
	// Click function that creates url param
	albumClick(e) {
		browserHistory.push(`/${this.props.name}`);
	}
});