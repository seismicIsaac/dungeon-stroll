import React from 'react';
import './ControlPanel.css';
import BattleConsole from './BattleConsole';

class ControlPanel extends React.Component {
  render() {
    let controlPanelState = 'map-active';

    if (this.props.battleState) {
      controlPanelState = 'battle-active';
    } else if (this.props.eventState) {
      controlPanelState = 'event-state';
    } // else if blah blah..

    return (
      <div className={`control-panel ${controlPanelState}`}>
        control panel lol
        <BattleConsole
          startDefaultCombatRound={this.props.startCombatRoundAction}
          battleState={this.props.battleState}
        />
      </div>);
  }
}

export default ControlPanel;