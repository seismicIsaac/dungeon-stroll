import React from 'react';
import './DayNightHeader.css';

const TIME_CLASS = ['dawn', 'morning', 'noon', 'after-noon', 'dusk', 'night'];

class DayNightHeader extends React.Component {
  render() {
  const time = this.props.dateTime.time;
  const timeClass = TIME_CLASS[Math.max(0, Math.floor(time / 400))];
  const formattedTime = time;
  const day = this.props.dateTime.day;

    return (
      <div className={`day-night-header ${timeClass}`}>
        <div className="sun-moon"></div>
        <div className="date-display">
          <p>{`Day: ${day}`}</p>
          <p>{`Time: ${formattedTime}`}</p>
        </div>
      </div>
    )
  }
}

export default DayNightHeader;