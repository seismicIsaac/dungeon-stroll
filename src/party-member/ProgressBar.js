import React from 'react';
import "./ProgressBar.css";

const ProgressBarType = {
  HEALTH: "health",
  STAMINA: "stamina",
  MANA: "mana",
};

class HorizontalProgressBar extends React.Component {
  render() {
    const barType = this.props.barType;
    const widthStyle = { width: `${(this.props.currentValue / this.props.total) * 100}%` };
  
    return (
      <div className="horizontal-progress-bar">
        <span className={barType} style={widthStyle}></span>
      </div>
    );
  }
}

class VerticalProgressBar extends React.Component {
  render() {
    const barType = this.props.barType;
    const heightStyle = { height: `${(this.props.currentValue / this.props.total) * 100}%` };

    return (
      <div className="vertical-progress-bar">
        <span className={barType} style={heightStyle}></span>
      </div>
    );     
  }
}

export { VerticalProgressBar, HorizontalProgressBar, ProgressBarType };
