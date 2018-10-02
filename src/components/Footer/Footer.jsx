import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

import timeIcon from '../../img/icons/time.svg';
import busIcon from '../../img/icons/bus.svg';
import routeIcon from '../../img/icons/route.svg';

class Footer extends Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {

    };
  }

  handleClick(btnClicked){
    this.props.onClickBtn(btnClicked);
  }

  render(){
    return(
      <footer className="footer">
        <button 
          className={`nav-btn${this.props.activeBtn === 1 ? ' active' : ''}`} 
          onClick={() => this.handleClick(1)}><img src={timeIcon} alt="time-icon" />
        </button>
        <button 
          className={`nav-btn${this.props.activeBtn === 2 ? ' active' : ''}`} 
          onClick={() => this.handleClick(2)}><img src={busIcon} alt="time-icon" />
        </button>
        <button 
          className={`nav-btn${this.props.activeBtn === 3 ? ' active' : ''}`} 
          onClick={() => this.handleClick(3)}><img src={routeIcon} alt="time-icon" />
        </button>
      </footer>
    );
  };
}

Footer.propTypes = {
  activeBtn: PropTypes.number.isRequired,
  onClickBtn: PropTypes.func.isRequired
}

export default Footer;