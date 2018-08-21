// Import React stuff
import React from 'react';
import { Link } from 'react-router';

const AlbumThumb = props => (
  <Link to={props.name} className="thumb">
    <div className="thumbImgWrap">
      <img src={require('./../images/' + props.img)} alt={props.name} />
    </div>
    <h3 className="thumbTitle">{props.name}</h3>
  </Link>
);

export default AlbumThumb;
