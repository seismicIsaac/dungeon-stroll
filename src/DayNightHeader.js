import React from 'react';
import './DayNightHeader.css';

const TIME_CLASS = ['dawn', 'morning', 'noon', 'after-noon', 'sun-set', 'dusk', 'night', 'night'];
const FULL_DAY_HOURS = 2400;
const SUN_HOURS = 1330;
const SUN_START_TIME = 430;
const SUN_END_TIME = 1800;
const MOON_START_TIME = 1800;
const MOON_END_TIME = 400;

class DayNightHeader extends React.Component {
  render() {
  const time = this.props.dateTime.time;
  const timeClass = TIME_CLASS[Math.max(0, Math.floor(time / (FULL_DAY_HOURS / TIME_CLASS.length)))];
  const formattedTime = time;
  const showSun = time >= SUN_START_TIME && time <= SUN_END_TIME;
  let sunMoonStyle = {left: '9%'};
  const sunMoonClass = showSun ? 'sun-time' : 'moon-time';

  if (showSun) {
    //Desired %, 9 - 94 lol..
    sunMoonStyle.left = 9 + (90 * (time - SUN_START_TIME) / (SUN_END_TIME - SUN_START_TIME)) + '%' ;
  } else {
    sunMoonStyle.left = time >= MOON_START_TIME
      ? (time - MOON_START_TIME) / (FULL_DAY_HOURS + MOON_END_TIME - MOON_START_TIME)
      : (time + FULL_DAY_HOURS - MOON_START_TIME) / (FULL_DAY_HOURS + MOON_END_TIME - MOON_START_TIME);
    sunMoonStyle.left = (9 + (100 * sunMoonStyle.left)) + '%';
  }

  const day = this.props.dateTime.day;

    return (
      <div className={`day-night-header ${timeClass}`}>
        <div className={`sun-moon ${sunMoonClass}`} style={sunMoonStyle}></div>
        <div className="date-display">
          <p>{`Day: ${day}`}</p>
          <p>{`Time: ${formattedTime}`}</p>
        </div>
      </div>
    )
  }
}

export default DayNightHeader;