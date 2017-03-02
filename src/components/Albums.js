import React from 'react';
import AlbumThumb from './AlbumThumb';

export default React.createClass({
	render() {
		const albums = this.props.albums.map((album, i) => {
			return (
				<AlbumThumb name={this.props.albums[i].name} 
					img={this.props.albums[i].photos[0].img}
					id={i}
					key={i}/>
			);
		});
		return (
			<div className="albumsContainer">
				{albums}
			</div>
		);
	},
});