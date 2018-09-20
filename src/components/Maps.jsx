import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Maps.css';

class Maps extends Component {
  render() {
    //let mapOne = <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac18d9b4e3262359b8de6c6c3c909f42b3fe8c1fb84d50dbaf9e5b515f5fc3780&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script>;
    return(
      (this.props.activeNav === 1) ?
      <div className="map">
        <div className="map-block">

        </div>
        <h4>Посадка от Машиностроительная улица, 91<br /> <small>Напротив Блока Б</small></h4>
      </div>
      :
      <div className="map">
        <div className="map-block">

        </div>
        <h4>Посадка от проспекту Вахитова<br /> <small>Напротив Блока Б</small></h4>
      </div>
    );
  };
}

Maps.propTypes = {
  activeNav: PropTypes.number
}

export default Maps;