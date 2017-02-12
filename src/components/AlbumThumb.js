import React from 'react';

export default React.createClass({
	render() {
		console.log(this.props.img);
		return (
			<div className="albumThumb">
				<img src={require('./../images/' + this.props.img)} alt={this.props.name} />
				<h1>{this.props.name}</h1>
			</div>
		);
	}
});