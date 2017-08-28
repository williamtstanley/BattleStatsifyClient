import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiActions from '../../actions/apiActions';

import {
  AppHeader,
  SummonerCard,
  SearchInput,
  RecentMatchList,
  LandingPage,
  Spinner, 
} from '../'

import './App.less';

@connect(
  undefined,
  (dispatch) => ({
    fetchStaticData: () => {
      dispatch(apiActions.fetchStaticData('champions'))
      dispatch(apiActions.fetchStaticData('items'))
    },
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
        <LandingPage />
        <SummonerCard />
        <RecentMatchList />
        <Spinner />
      </div>
    );
  }
}

export default App;
