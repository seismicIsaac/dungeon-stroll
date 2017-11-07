import React from 'react';
import { VerticalProgressBar, ProgressBarType } from './ProgressBar';
import './VitalsTriBar.css';

class VitalsTriBar extends React.Component {
  render() {
    return (
      <div className="vitals-tri-bar">
        <VerticalProgressBar 
          barType={ ProgressBarType.HEALTH }
          currentValue={ this.props.currentHealth }
          total={ this.props.totalHealth }
        />
        <VerticalProgressBar
          barType={ ProgressBarType.STAMINA }
          currentValue={ this.props.currentStamina }
          total={ this.props.totalStamina }
        />
        <VerticalProgressBar
          barType={ ProgressBarType.MANA }
          currentValue={ this.props.currentMana }
          total={ this.props.totalMana }
        />
      </div>
    );
  }
}

export { VitalsTriBar };