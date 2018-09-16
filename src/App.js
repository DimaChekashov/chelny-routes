import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Window from './components/Window';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Window />
        <Footer />
      </div>
    );
  }
}

export default App;
