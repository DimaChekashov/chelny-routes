import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Loader.css'

class Loader extends Component {
  render() {
    return(
      <div className={`loader${this.props.loaded === true ? ' loader-hide' : ''}`}>
        <span className="loader-icon"></span>
        <h3 className="loader-title">Загрузка...</h3>
      </div>
    );
  }
}

Loader.propTypes = {
  loaded: PropTypes.bool
};

export default Loader;