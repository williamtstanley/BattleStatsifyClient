import React, { Component } from 'react';
import { Logo, TitleText, SummonerCard } from '../../components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo />
          <TitleText>BattleStatsify</TitleText>
        </div>
        <SummonerCard />
        <p className="App-intro">
          here goes content 
        </p>
      </div>
    );
  }
}

export default App;
