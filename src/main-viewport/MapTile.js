import React from 'react';
import './MapTile.css';

const imageByTerrainType = {
  0: 'hidden',
  1: 'tree-grass',
  2: 'grass',
  3: 'gravel',
  4: 'mountain-grass',
  5: 'water',
  6: 'yellow-road',
}

/* Return a position class that we can add to a map tile so that it gets styled appropriately.
 * This is designed to be used with the perspective view, and is commented
 * out for now while we go with top down view.
 * 
    function positionClassCalculator(row, col) {
      const depthClass = ordinalByInteger[playerRow - row];
      let directionClass = '';
      let directionOrdinal = '';
      
      if (col > playerCol) {
        directionClass = 'right';
        directionOrdinal = ordinalByInteger[col - playerCol];
      } 
      else if (col < playerCol) {
        directionClass = 'left';
        directionOrdinal = ordinalByInteger[playerCol - col];
      }

      return 'forward-' + depthClass + ' ' + directionClass + '-' + directionOrdinal; 
    }
*/

function MapTile(props) {
  const terrainType = imageByTerrainType[props.terrainType];
  //const positionClass = positionClassCalculator(props.row, props.col);
  return (
    <div className={`tile ${terrainType}`}></div>
  );
}

export default MapTile;
 