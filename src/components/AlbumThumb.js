// Import React stuff
import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  // Render using passed-down props for album image & name
  render() {
    return (
      <Link to={this.props.name} className="thumb">
        <div className="thumbImgWrap">
          <img
            src={require('./../images/' + this.props.img)}
            alt={this.props.name}
          />
        </div>
        <h3 className="thumbTitle">{this.props.name}</h3>
      </Link>
    );
  },
});
