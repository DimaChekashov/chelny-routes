import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Route.css';

class Route extends Component {
  render() {
    return(
      (this.props.activeNav === 1) ?
      <div className="route">
        <h4>Маршрут автобуса В It-park</h4>
        <ul className="route-list">
          <li><h3>44-й комплекс</h3></li>
          <li><h3>6-р Кереселидзе</h3></li>
          <li><h3>45-й комплекс</h3></li>
          <li><h3>30-й комплекс</h3></li>
          <li><h3>Глобус</h3></li>
          <li><h3>Магазин Океан</h3></li>
          <li><h3>40 лет Победы</h3></li>
        </ul>
      </div>
      :
      <div className="route">
        <h4>Маршрут автобуса Из It-park</h4>
        <ul className="route-list">
          <li><h3>It-park</h3></li>
        </ul>
      </div>
    );
  };
}

Route.propTypes = {
  activeNav: PropTypes.number
}

export default Route;