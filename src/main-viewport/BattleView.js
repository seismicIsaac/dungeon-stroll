import React from 'react';
import './BattleView.css';

class BattleView extends React.Component {

  render() {
    if (!this.props.battleState) {
      return null;
    }
    console.log('BattleState: ', this.props.battleState);
    const monsterGroupsData = this.props.battleState.monsterGroups;

    const monsterGroups = monsterGroupsData.map((monsterGroup, index) => {
      return (<div className={`monster-group position-${index}`} key={index}>{monsterGroup.map((monster, index) => {
        return (<div className={`monster id${monster.id}`} key={index}></div>);
      })}</div>);
    });

    return (
      <div className="battle-div">
        <div className="monster-groups">
          {monsterGroups}
        </div>
      </div>
    )
  }
}

export default BattleView;