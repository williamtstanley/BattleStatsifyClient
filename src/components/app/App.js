import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiActions from '../../actions/apiActions'

import {
  AppHeader,
  SummonerCard,
  SearchInput,
  RecentMatchList 
} from '../'

import './App.less';

@connect(
  undefined,
  (dispatch) => ({
    fetchStaticData: () => dispatch(apiActions.fetchStaticData()),
  })
)
class App extends Component {
  componentDidMount() {
    this.props.fetchStaticData()
  }
  render() {
    return (
      <div className="App">
        <AppHeader />  
        <SearchInput />
        <SummonerCard />
        <RecentMatchList />
      </div>
    );
  }
}

export default App;
