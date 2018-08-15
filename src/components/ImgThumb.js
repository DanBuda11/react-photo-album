// Import React stuff
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  // Render using passed-down props for image and image caption
  render() {
    return (
      <Link to={`${this.props.albumName}/${this.props.id}`} className="thumb">
        <div className="thumbImgWrap">
          <img
            src={require('./../images/' + this.props.img)}
            alt={this.props.cap}
          />
        </div>
        <h3 className="thumbTitle">{this.props.cap}</h3>
      </Link>
    );
  },
});
