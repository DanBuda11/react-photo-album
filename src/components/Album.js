import React from 'react';
import { Link } from 'react-router';
import ImgThumb from './ImgThumb';

export default React.createClass({
	render() {
		const thisAlbum = this.props.albums.filter(album => 
			album.name === this.props.params.albumName);
		const photoThumbs = thisAlbum[0].photos.map((photo, i) => {
			return (
				<ImgThumb key={i}
					id={i}
					img={photo.img}
					cap={photo.cap}
					albumName={thisAlbum[0].name}
				/>
			);
		});
		return (
			<div>
				<Link to="/">Home</Link>
				<h1>{thisAlbum[0].name}</h1>
				<div className="thumbContainer">
					{photoThumbs}
				</div>
			</div>
		);
	}
});