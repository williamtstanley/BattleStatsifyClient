import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LandingPage.less';

@connect(
  (state) => ({
    summoner: state.summoner,
    summonerError: state.summonerError,
    loading: state.loadingData,
  })
)
class LandingPage extends Component {
  render() {
    if (this.props.summoner || this.props.summonerError || this.props.loading) {
      return null;
    }
    return (
      <div className='landing-page'>
        <h1>Welcome to BattleStatsify!</h1>
        <h4>(Enter a summoner name into the search bar to begin)</h4>
      </div>
    )
  }
}

export default LandingPage;
