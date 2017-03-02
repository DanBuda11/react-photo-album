import React from 'react';

export default React.createClass({
	render() {
		console.log(this.props.img);
		return (
			<div className="albumThumb">
				<div className="thumbImgWrap">
					<img src={require('./../images/' + this.props.img)} alt={this.props.name} />
				</div>
				<h3 className="albumThumbTitle">{this.props.name}</h3>
			</div>
		);
	}
});