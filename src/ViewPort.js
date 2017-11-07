import React from 'react';
import MapTile from './MapTile';
import MapPartyArrow from './MapPartyArrow';
import '.'
import './ViewPort.css';

class ViewPort extends React.Component {
  render() {
    let activeView = 'map-active';

    let viewableMap = this.props.viewableMap;
    const mapTiles = [];
    for(let i = 0; i < viewableMap.length; i++) {
      let tileArray = [];
      let tileRow = [];
      for(let j = 0; j < viewableMap[i].length; j++) {
        tileArray.push(<MapTile key={((i+1) * viewableMap[i].length) + (j + 1)} row={i} col={j} terrainType={viewableMap[i][j]} />);
      }
      tileRow.push(<div key={i} className="tile-row">{tileArray}</div>);
      mapTiles.push(tileRow);
    }
    return (
      <div className={`view-port ${activeView}`}>
        <div className="map-view">
          {mapTiles}
          <MapPartyArrow 
            facingDirection={this.props.facingDirection}
            visionRadius={this.props.visionRadius}
          />
        </div>
        <div className="battle-view"></div>
        <div className="character-screen-view"></div>
      </div>
    );
  }
}

export default ViewPort;