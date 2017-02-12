import React from 'react';
import AlbumThumb from './AlbumThumb';

export default React.createClass({
	render() {
		console.log(this.props);
		const albums = this.props.albums.map((album, i) => {
			return (
				<AlbumThumb name={this.props.albums[i].name} 
					img={this.props.albums[i].photos[0].img}
					key={i}/>
			);
		});
		return (
			<div>
				{albums}
			</div>
		);
	}
});