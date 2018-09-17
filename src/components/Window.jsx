import React, { Component } from 'react';
import './Window.css';

import TimeList from './TimeList';
import Maps from './Maps';
import Route from './Route';

class Window extends Component {
  constructor(props){
    super(props);

    this.state = {
      activeBlock: 3
    }
  }
  render(){
    let activeBlock = (this.state.activeBlock == 1) ? <TimeList /> 
                      : 
                      (this.state.activeBlock == 2) ? <Maps /> 
                      : 
                      (this.state.activeBlock == 3) ? <Route /> 
                      : 
                      '';
    return(
      <div className="window">{activeBlock}</div>
    );
  };
}

export default Window;