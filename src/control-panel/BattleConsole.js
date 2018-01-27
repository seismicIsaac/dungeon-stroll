import React from 'react';
import './BattleConsole.css';

const PARTY_ENDPOINT = 'http://localhost:8080/dungeon-stroll/game/';

class BattleConsole extends React.Component {

  startCombatRound() {
    this.props.startDefaultCombatRound();
  }

  render() {
    let visibility = !this.props.battleState ? 'hidden' : '';
    return (
      <div className={`battle-console ${visibility}`}>
        Battle Console
        <button onClick={this.startCombatRound.bind(this)}>Start Next Combat Round</button>
      </div>);
  }
}

export default BattleConsole;