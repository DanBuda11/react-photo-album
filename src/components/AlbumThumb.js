import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
	render() {
		console.log(this.props.img);
		return (
			<div className="albumThumb" onClick={this.albumClick}>
				<div className="thumbImgWrap">
					<img src={require('./../images/' + this.props.img)} alt={this.props.name} />
				</div>
				<h3 className="albumThumbTitle">{this.props.name}</h3>
			</div>
		);
	},
	albumClick(e) {
		browserHistory.push(`/album/${this.props.id}`);
	}
});