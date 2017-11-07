import React, { Component } from 'react';
import './PartyMember.css';
import { VitalsTriBar } from "./VitalsTriBar";
import { SmallPortrait } from "./SmallPortrait";

class PartyMember extends Component {
  render() {
    const side = this.props.cellId % 2 === 0 ? 'left' : 'right';
    return (
      <div className={`party-member ${side}`}>
        <SmallPortrait 
          name={this.props.name}
        />

        <VitalsTriBar 
          currentHealth={this.props.health}
          totalHealth={this.props.totalHealth}
          currentStamina={this.props.stamina}
          totalStamina={this.props.totalStamina}
          currentMana={this.props.mana}
          totalMana={this.props.totalMana}
        />
      </div>
    )
  }
}

export default PartyMember;