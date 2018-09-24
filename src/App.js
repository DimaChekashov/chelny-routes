import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import WindowBlock from './components/WindowBlock';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);

    this.handleClickBtnHeader = this.handleClickBtnHeader.bind(this);
    this.handleClickBtnFooter = this.handleClickBtnFooter.bind(this);
    this.handleTime = this.handleTime.bind(this);

    this.state = {
      activeNavHeader: 1,
      acitveNavFooter: 2,
      time: [null, null]
    };
  }

  handleTime(item){
    let time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes();

    this.setState({ time: [hours, minutes]});
  }
  
  handleClickBtnHeader(btnActive){
    this.setState({ activeNavHeader: btnActive }); 
  }

  handleClickBtnFooter(btnActive){
    this.setState({ acitveNavFooter: btnActive });
  }

  render() {
    return (
      <div className="App">
        <Header 
          onActiveNav={this.handleClickBtnHeader} 
          activeLink={this.state.activeNavHeader}
        />
        <WindowBlock 
          activeBlock={this.state.acitveNavFooter} 
          activeNavLink={this.state.activeNavHeader}
          timeNow={this.handleTime}
        />
        <Footer 
          onClickBtn={this.handleClickBtnFooter} 
          activeBtn={this.state.acitveNavFooter} 
        />
      </div>
    );
  }
}

export default App;
