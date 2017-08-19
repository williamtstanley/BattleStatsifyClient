import React, { Component } from 'react';
import { Logo, TitleText } from '../../components'
import logo from '../../media/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo src={logo} className="App-logo" alt="logo" />
          <TitleText>BattleStatsify</TitleText>
        </div>
        <p className="App-intro">
          here goes content 
        </p>
      </div>
    );
  }
}

export default App;
