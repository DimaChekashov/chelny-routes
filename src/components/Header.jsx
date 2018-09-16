import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
  constructor(props){
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key){
    alert(`selected ${key}`);
  }

  render(){
    return(
      <header className="header">
        <ul className="tabs-nav">
          <li className="tab-item"><a className="tab-link active">В It-park</a></li>
          <li className="tab-item"><a className="tab-link">Из It-park</a></li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  eventKey: PropTypes.number
}

export default Header;