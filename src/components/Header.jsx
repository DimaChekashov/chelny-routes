import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {

    };
  }

  handleSelect(key){
    this.props.onActiveNav(key);
  }

  render(){
    return(
      <header className="header">
        <ul className="tabs-nav">
          <li className="tab-item"><a onClick={ () => this.handleSelect(1) } className={`tab-link${this.props.activeLink === 1 ? ' active' : ''}`}>В It-park</a></li>
          <li className="tab-item"><a onClick={ () => this.handleSelect(2) } className={`tab-link${this.props.activeLink === 2 ? ' active' : ''}`}>Из It-park</a></li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  onActiveNav: PropTypes.func,
  activeLink: PropTypes.number
}

export default Header;