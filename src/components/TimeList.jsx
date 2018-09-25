import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TimeList.css';

import times from '../times';

class TimeList extends Component {
  constructor(props){
    super(props);

    this.state = {
      times: times
    }
  }

  render(){
    return (
      <ul className="time-list">
        (this.props.activeNav === 1) ?
          {this.state.times[0].time.map(time => <li key={time} className="time-item">{time}</li>)}
        :
          {this.state.times[1].time.map(time => <li key={time} className="time-item">{time}</li>)}
      </ul>
    );
  };
}

TimeList.propTypes = {
  activeNav: PropTypes.number,
  time: PropTypes.array
}

export default TimeList;
