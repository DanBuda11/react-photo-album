import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
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
	albumClick(e) {
		browserHistory.push(`/${this.props.name}`);
	}
});