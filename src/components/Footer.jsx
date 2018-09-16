import React, { Component } from 'react';
import './Footer.css';

import timeIcon from '../img/icons/time.svg';
import busIcon from '../img/icons/bus.svg';
import routeIcon from '../img/icons/route.svg';

class Footer extends Component {
  constructor(props){
    super(props);

    this.state = {
      timeWindow: true,
      busWindow: false,
      routeWindow: false
    }
  }
  render(){
    return(
      <footer className="footer">
        <button className="nav-btn"><img src={timeIcon} alt="time-icon" /></button>
        <button className="nav-btn"><img src={busIcon} alt="time-icon" /></button>
        <button className="nav-btn"><img src={routeIcon} alt="time-icon" /></button>
      </footer>
    );
  };
}

export default Footer;