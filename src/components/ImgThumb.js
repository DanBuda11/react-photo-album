// Import React stuff
import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
	// Render using passed-down props for image and image caption
	render() {
		return (
			<div className="thumb" onClick={this.imgClick}>
				<div className="thumbImgWrap">
					<img src={require('./../images/' + this.props.img)} alt={this.props.cap} />
				</div>
				<h3 className="thumbTitle">{this.props.cap}</h3>
			</div>
		);
	},
	// Click function that creates url params
	imgClick(e) {
		browserHistory.push(`/${this.props.albumName}/${this.props.id}`);
	}
});