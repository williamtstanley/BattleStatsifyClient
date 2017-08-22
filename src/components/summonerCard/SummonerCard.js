import React, { Component }  from 'react';
import { connect } from 'react-redux';
import uiActions from '../../actions/uiActions';
import config from '../../config/default';
import './SummonerCard.css';

const urlBase = config.s3.linkBase; 

@connect(
	(state) => {
		return {
      profileIconLoaded: state.profileIconLoaded,
			summoner: state.summoner,
      summonerError: state.summonerError,
		};
	},
  (dispatch) => {
    return {
      imageLoaded: () => dispatch(uiActions.imageLoaded('profileIcon'))
    }
  }
)
export default class SummonerCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgLoaded: false,
    }
  }

  getProfileIcon() {
    const summoner = this.props.summoner
    return summoner && summoner.profileIconId ? 
      `${urlBase}profileicon/${this.props.summoner.profileIconId}.png` : ''; 
  }
  
  formatName() {
    const name = this.props.summoner && this.props.summoner.name;
    return name ? `${name[0].toUpperCase()}${name.slice(1)}` : '';
  }

  render() {
    const notFound = this.props.summonerError ? <h1>Sorry, I could not find a summoner with that name.</h1> : null;
		return (
      <div>
        {notFound}
        <div
          className='summoner-card-content'
				  aria-hidden={ !this.props.summonerError && this.props.profileIconLoaded ? 'false' : 'true'}
        >
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
            </h1>	
          </div> 
        </div>
      </div>
		);
	}
}
