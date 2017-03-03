import React from 'react';
import AlbumThumb from './AlbumThumb';

export default React.createClass({
	render() {
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