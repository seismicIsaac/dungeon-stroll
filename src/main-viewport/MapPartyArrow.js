import React from 'react';
import './MapPartyArrow.css';

export default function MapPartyArrow(props) {
  const className = `map-party-arrow ${props.facingDirection}`;
  const positionStyle = {
    top: 32 * (props.visionRadius) + 'px',
    left: 32 * (props.visionRadius) + 'px'
  };

  return (<div className={className} style={positionStyle}></div>);
};