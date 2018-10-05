import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Time.css';

class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time:  0,
      late: false
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const now = new Date();
    const busTime = this.props.busTime.split(':');
    let min = parseInt(busTime[1]) - now.getMinutes(),
        hours = parseInt(busTime[0]) - now.getHours();

    if (hours < 0) {
      min = 0;
      hours = 0;
      this.setState({
        late: true
      });
    }
    if (hours > 0 && min < 0) {
      hours--;
      min = 60 + min;
    }

    this.setState({
      time: hours + ':' + min
   });
  }

  render() {
    return (
      <span className={`time-left${this.state.late === true ? ' time-down' : ''}`}>{this.state.late === false ? `Автобус приедет через: ${this.state.time}` : 'Автобус больше не приедет по этому времени найдите другой способ передвижения'}</span>
    );
  }
}

Time.propTypes = {
  busTime: PropTypes.string
};

export default Time;