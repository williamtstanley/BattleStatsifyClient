import React, { Component }  from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import uiActions from '../../actions/uiActions';
import config from '../../config/default';
import CardDetailBlock from './CardDetailBlock';

import './SummonerCard.less';

const urlBase = config.s3.linkBase; 

@connect(
	(state) => {
		return {
      profileIconLoaded: state.profileIconLoaded,
			summoner: state.summoner,
      summonerError: state.summonerError,
      matches: state.matches,
      loadingData: state.loadingData,
		};
	},
  (dispatch) => {
    return {
      imageLoaded: () => dispatch(uiActions.imageLoaded('profileIcon'))
    }
  }
)
export default class SummonerCard extends Component {
  getProfileIcon() {
    const { profileIconId } = this.props.summoner
    return profileIconId ? 
      `${urlBase}profileicon/${this.props.summoner.profileIconId}.png` : ''; 
  }
  
  formatName() {
    const { name } = this.props.summoner;
    return name ? `${name[0].toUpperCase()}${name.slice(1)}` : '';
  }

  getTier() {
    const { leagueStat } = this.props.summoner;
    let tier = leagueStat && leagueStat.length > 1 ? 'Tiers:' : 'Tier:';
    return leagueStat && leagueStat.length ?
      `${tier} ${leagueStat.map((league) => `${league.tier} (${league.rank})`).join(' | ')}` : ''
  }

  getMostRecentGameDate() {
    let output;
    if (this.props.matches) {
      let str = `${moment(this.props.matches[0].gameCreation).fromNow()}`;
      output = (
        <CardDetailBlock
          displayText={str}
          label="last match"
        />
      ) 
    }
    return output;
  }

  getTierWinRate() {
    let output;
    const { leagueStat } = this.props.summoner;
    if (leagueStat && leagueStat.length) {
      const numGamesArr = leagueStat.map((stat) => stat.wins + stat.losses)
      const index = numGamesArr.indexOf(Math.max(...numGamesArr))
        
      const { wins, losses } = leagueStat[index];
      const str = `${Math.round((wins / (wins + losses)) * 10000) / 100}%`
      output = (
        <CardDetailBlock
          displayText={str}
          label="win rate"
        />
      )
    }
    return output;
  }

  getTierRecord() {
    let output;
    const { leagueStat } = this.props.summoner;
    if (leagueStat && leagueStat.length) {
      const { wins, losses } = leagueStat[0];
      const str = `${wins} wins  ${losses} losses`
      output = (
        <CardDetailBlock
          displayText={str}
          label="tier record"
        />
      )
    }
    return output;
  }

  render() {
    if (this.props.loadingData) {
      return null;
    }
    const notFound = this.props.summonerError ? 
      <h1>Sorry, I could not find a summoner with that name.</h1> : null;
		return (
      <div>
        {notFound}
        { this.props.summoner ? (
          <div
            className='summoner-card-content'
          >
            <div className='profile-content'>
              <div className='profile-icon-container'>
                <img
                  onLoad={() => this.props.imageLoaded()} 
                  src={this.getProfileIcon()}
                  className='profile-icon'
                  alt='profile-icon'
                />
              </div>
              <div className='title-content'>
		            <h1>
                  {this.formatName()}
                  <small>Level: {this.props.summoner && this.props.summoner.summonerLevel}</small>
                  <small>{this.getTier()}</small>
                </h1>	
              </div>
            </div>
            <div>
              {this.getMostRecentGameDate()}
              {this.getTierWinRate()}
              {this.getTierRecord()}
            </div> 
          </div>
        ) : null }
      </div>
		);
	}
}
