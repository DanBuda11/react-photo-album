//Import React stuff
import React from 'react';
import { Link } from 'react-router';
// Import component
import ImgThumb from './ImgThumb';

const Album = props => {
  // Keep only the data from the clicked on album
  const thisAlbum = props.albums.filter(
    album => album.name === props.params.albumName
  );
  // Pass down props to each image thumbnail
  const photoThumbs = thisAlbum[0].photos.map((photo, i) => {
    return (
      <ImgThumb
        key={i}
        id={i}
        img={photo.img}
        cap={photo.cap}
        albumName={thisAlbum[0].name}
      />
    );
  });
  return (
    <div>
      <p className="arrow">&#10096;</p>
      <Link to="/" id="breadcrumb">
        Home
      </Link>
      <h1 className="title">{thisAlbum[0].name}</h1>
      <div className="thumbContainer">{photoThumbs}</div>
    </div>
  );
};

export default Album;
