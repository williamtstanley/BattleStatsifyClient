import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../../config/default';

const urlBase = config.s3.linkBase; 

@connect(
  (state, ownProps) => {
    return {
      champion: state.champions
        .find((c) => c.id === ownProps.championId),
    }
  }
)
class ChampionDetail extends Component {
  getImageUrl() {
    return `${urlBase}champion/${this.props.champion.key}.png`; 
  }
  
  render() {
    return (
      <div className='champion-detail-container'>
        <img
          src={this.getImageUrl()}
          className='profile-icon'
          alt='profile-icon'
        />
        {
          !this.props.noText ? <span>{this.props.champion.name}</span> : null
        }
      </div>
    )
  }
}

export default ChampionDetail;
