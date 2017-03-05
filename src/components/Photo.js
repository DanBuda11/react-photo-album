// Import React stuff
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		// Keep only the data from the clicked on album
		const thisAlbum = this.props.albums.filter(album => 
			album.name === this.props.params.albumName);
		// Save image data in a const using param as a reference
		const thisPhoto = thisAlbum[0].photos[this.props.params.photoId];
		return (
			<div>
				<p className="arrow">&#10096;</p>
				<Link to="/" id="breadcrumb">Home</Link>
				<p className="arrow">&#10096;</p>
				<Link to={`/${this.props.params.albumName}`} id="breadcrumb">{thisAlbum[0].name}</Link>
				<h1 className="title">{thisPhoto.cap}</h1>
				<img className="bigPhoto" src={require('./../images/' + thisPhoto.img)} alt={thisPhoto.cap} />
			</div>
		);
	}
});