import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Maps.css';

class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: [{
        text: <h4>Посадка от Машиностроительная улица, 91<br /> <small>Напротив Блока Б</small></h4>,
        map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acc13de2b90ca4b0cd35b66f2dcd2af818fcfd13d572094f91535d892fe533dac&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
      },
      {
        text: <h4>Посадка от проспекту Вахитова<br /> <small>Напротив Блока Б</small></h4>,
        map: <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac18d9b4e3262359b8de6c6c3c909f42b3fe8c1fb84d50dbaf9e5b515f5fc3780&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
      }] 
    };
  }

  render() {
    let station = this.state.stations[this.props.activeNav - 1];

    return (
      <div className="map">
        <div ref={this.myMap} className="map-block">
          {station.map}
        </div>
        {station.text}
      </div>
    );
  };
}

Maps.propTypes = {
  activeNav: PropTypes.number
}

export default Maps;