import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import WindowBlock from './components/WindowBlock/WindowBlock';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

class App extends Component {
  constructor(props){
    super(props);

    this.handleClickBtnHeader = this.handleClickBtnHeader.bind(this);
    this.handleClickBtnFooter = this.handleClickBtnFooter.bind(this);
    this.handleLoad = this.handleLoad.bind(this);

    this.state = {
      activeNavHeader: 1,
      acitveNavFooter: 1,
      loaded: false
    };
  }
  
  handleClickBtnHeader(btnActive){
    this.setState({ activeNavHeader: btnActive }); 
  }

  handleClickBtnFooter(btnActive){
    this.setState({ acitveNavFooter: btnActive });
  }

  handleLoad(){
    this.setState({ loaded: true });
  }

  render() {
    return (
      <div className="App" onLoad={ this.handleLoad }>
        <Loader loaded={this.state.loaded} />
        <Header 
          onActiveNav={this.handleClickBtnHeader} 
          activeLink={this.state.activeNavHeader}
        />
        <WindowBlock 
          activeBlock={this.state.acitveNavFooter} 
          activeNavLink={this.state.activeNavHeader}
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
