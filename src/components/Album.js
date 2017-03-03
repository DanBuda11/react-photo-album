import React from 'react';
import { Link } from 'react-router';
import ImgThumb from './ImgThumb';

export default React.createClass({
	render() {
		const paramId = this.props.params.albumId;
		const photoThumbs = this.props.albums[paramId].photos.map((photo, i) => {
			return (
				<ImgThumb 
					key={i}
					cap={photo.cap}
					img={photo.img}
				/>
			);
		});
		return (
			<div>
				<Link to="/">Home</Link>
				<h1>{this.props.albums[this.props.params.albumId].name}</h1>
				<div className="thumbContainer">
					{photoThumbs}
				</div>
			</div>
		);
	}
});