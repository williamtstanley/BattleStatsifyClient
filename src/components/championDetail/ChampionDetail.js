import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToolTip } from '../';
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
    if (this.props.noText) {
      return (
        <ToolTip tip={<span>{this.props.champion.name}</span>}>
          <div className='champion-detail-container'>
            <img
              src={this.getImageUrl()}
              className='profile-icon'
              alt='profile-icon'
            />
          </div>
        </ToolTip>
      )
    }
    return (
      <div className='champion-detail-container'>
        <img
          src={this.getImageUrl()}
          className='profile-icon'
          alt='profile-icon'
        />
        <span>{this.props.champion.name}</span>
      </div>
    )
  }
}

export default ChampionDetail;
