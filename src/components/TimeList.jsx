import React, { Component } from 'react';
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
    return(
      <ul className="time-list">
        {this.state.times[0].time.map(time => <li key={time} className="time-item">{time}</li>)}
      </ul>
    );
  };
}

export default TimeList;