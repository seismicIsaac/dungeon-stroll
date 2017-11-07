import React from 'react';
import './SmallPortrait.css';
import portrait1 from './../images/black-magus-1.png';

function SmallPortrait(props) {
  return (
    <div className="small-portrait">
      <img src={portrait1} alt={"Portrait"}/>
      <p>{props.name}</p>
    </div>
  )
}

export { SmallPortrait };