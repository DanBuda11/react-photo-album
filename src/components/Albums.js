// Import React stuff
import React from 'react';
// Import component
import AlbumThumb from './AlbumThumb';

export default React.createClass({
	render() {
		// Give each album thumbnail props
		const albums = this.props.albums.map((album, i) => {
			return (
				<AlbumThumb name={album.name} 
					img={album.photos[0].img}
					id={i}
					key={i}/>
			);
		});
		return (
			<div className="thumbContainer">
				{albums}
			</div>
		);
	},
});