import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import WindowBlock from './components/WindowBlock';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);

    this.handleClickBtnFooter = this.handleClickBtnFooter.bind(this);

    this.state = {
      activeNavHeader: 1,
      acitveNavFooter: 2
    };
  }
  handleClickBtnFooter(btnActive){
    this.setState({ acitveNavFooter: btnActive });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <WindowBlock activeBlock={this.state.acitveNavFooter} />
        <Footer 
          onClickBtn={this.handleClickBtnFooter} 
          activeBtn={this.state.acitveNavFooter} 
        />
      </div>
    );
  }
}

export default App;
