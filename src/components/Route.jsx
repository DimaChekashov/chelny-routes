import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Route.css';

class Route extends Component {
  render() {
    return(
      (this.props.activeNav === 1) ?
      <div className="route">
        <h4>Маршрут автобуса В It-park</h4>
      </div>
      :
      <div className="route">
        <h4>Маршрут автобуса Из It-park</h4>
      </div>
    );
  };
}

Route.propTypes = {
  activeNav: PropTypes.number
}

export default Route;