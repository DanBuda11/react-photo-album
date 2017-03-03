import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
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
	imgClick(e) {
		browserHistory.push(`/${this.props.albumName}/${this.props.id}`);
	}
});