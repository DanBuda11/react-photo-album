import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		const thisAlbum = this.props.albums.filter(album => 
			album.name === this.props.params.albumName);
		const thisPhoto = thisAlbum[0].photos[this.props.params.photoId];
		return (
			<div>
				<Link to="/">Home</Link>
				<img className="bigPhoto" src={require('./../images/' + thisPhoto.img)} alt={thisPhoto.cap} />
			</div>
		);
	}
});