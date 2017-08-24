import React, { Component } from 'react';
import { Logo, TitleText, SummonerCard, SearchInput, RecentMatchList } from '../../components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo />
          <TitleText>BattleStatsify</TitleText>
        </div>
        <SearchInput />
        <SummonerCard />
        <RecentMatchList />
      </div>
    );
  }
}

export default App;
