import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return(
      <header className="header">
        <ul>
          <li>В It-park</li>
          <li>В УЛК2</li>
        </ul>
      </header>
    );
  }
}

export default Header;