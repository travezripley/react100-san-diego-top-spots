//this is a stateless component for your pleasure.
import React from 'react';

export default props => (

  <div className="well">
    <h4>{props.name}</h4>
    <p>{props.description}</p>
  <a
  href={`https://maps.google.com/?q=` + props.location[0] + ',' + props.location[1]}
  target='blank'
  className="btn btn-primary">Open in map</a>

  </div>

);