import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Time.css';

class Time extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time:  0,
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

    this.setState({
      time: now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
   });
  }

  render() {
    return (
      <span className="time-left">{this.props.busTime} {this.state.time}</span>
    );
  }
}

Time.propTypes = {
  busTime: PropTypes.string
};

export default Time;