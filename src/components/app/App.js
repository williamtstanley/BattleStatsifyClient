import React, { Component } from 'react';
import logo from '../../media/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to BattleStatsify</h2>
        </div>
        <p className="App-intro">
          here goes content 
        </p>
      </div>
    );
  }
}

export default App;
