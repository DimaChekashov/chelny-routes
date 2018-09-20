import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WindowBlock.css';

import TimeList from './TimeList';
import Maps from './Maps';
import Route from './Route';

class WindowBlock extends Component {
  render(){
    let activeBlock = (this.props.activeBlock === 1) ? <TimeList activeNav={this.props.activeNavLink} /> 
                      : 
                      (this.props.activeBlock === 2) ? <Maps activeNav={this.props.activeNavLink}  /> 
                      : 
                      (this.props.activeBlock === 3) ? <Route activeNav={this.props.activeNavLink}  /> 
                      : 
                      '';
    return(
      <div className="window">{activeBlock}</div>
    );
  };
}

WindowBlock.propTypes = {
  activeBlock: PropTypes.number,
  activeNavLink: PropTypes.number
}

export default WindowBlock;