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

  }

  render(){
    return(
      <header className="header">
        <ul className="tabs-nav">
          <li className="tab-item"><a onClick={ () => this.setState({ key: 1}) } className={this.state.key === 1 ? 'tab-link active' : 'tab-link'}>В It-park</a></li>
          <li className="tab-item"><a onClick={ () => this.setState({ key: 2}) } className={this.state.key === 2 ? 'tab-link active' : 'tab-link'}>Из It-park</a></li>
        </ul>
      </header>
    );
  }
}

Header.propTypes = {
  eventKey: PropTypes.number
}

export default Header;