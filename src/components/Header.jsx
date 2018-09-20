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
          <li className="tab-item"><a onClick={ () => this.handleSelect(1) } className={this.props.activeLink === 1 ? 'tab-link active' : 'tab-link'}>В It-park</a></li>
          <li className="tab-item"><a onClick={ () => this.handleSelect(2) } className={this.props.activeLink === 2 ? 'tab-link active' : 'tab-link'}>Из It-park</a></li>
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