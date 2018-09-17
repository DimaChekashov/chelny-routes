import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WindowBlock.css';

import TimeList from './TimeList';
import Maps from './Maps';
import Route from './Route';

class WindowBlock extends Component {
  render(){
    let activeBlock = (this.props.activeBlock === 1) ? <TimeList /> 
                      : 
                      (this.props.activeBlock === 2) ? <Maps /> 
                      : 
                      (this.props.activeBlock === 3) ? <Route /> 
                      : 
                      '';
    return(
      <div className="window">{activeBlock}</div>
    );
  };
}

WindowBlock.propTypes = {
  activeBlock: PropTypes.number
}

export default WindowBlock;