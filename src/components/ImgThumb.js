// Import React stuff
import React from 'react';
import { Link } from 'react-router';

const ImgThumb = props => (
  <Link to={`${props.albumName}/${props.id}`} className="thumb">
    <div className="thumbImgWrap">
      <img src={require('./../images/' + props.img)} alt={props.cap} />
    </div>
    <h3 className="thumbTitle">{props.cap}</h3>
  </Link>
);

export default ImgThumb;
