import React, { Component } from 'react';
import './Maps.css';

class Maps extends Component {
  render() {
    return(
      <div className="map">
        <div className="map-block">
          <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac18d9b4e3262359b8de6c6c3c909f42b3fe8c1fb84d50dbaf9e5b515f5fc3780&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false"></script>
        </div>
        <h4>Посадка от Машиностроительная улица, 91<br /> <small>Напротив Блока Б</small></h4>
      </div>
    );
  };
}

export default Maps;