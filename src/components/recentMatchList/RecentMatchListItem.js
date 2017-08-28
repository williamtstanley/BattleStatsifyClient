import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import moment from 'moment';
import uiActions from '../../actions/uiActions';
import { ChampionDetail } from '../';
import ListItemDetail from './ListItemDetail';
import { formatText, getDuration } from '../../helpers';

@connect(
  undefined,
  (dispatch, ownProps) => ({
    handleClick: () => {
      dispatch(uiActions.setMatchDetails(ownProps.match))
      dispatch(uiActions.toggleModal())
    }
  })
)
class RecentMatchListItem extends Component {
  getDuration() {
    return getDuration(this.props.match.gameDuration)
  }

  getKDA() {
    const { kills, assists, deaths } = this.props.playerInfo.stats
    const kda = `${kills}/${deaths}/${assists}`
    return <span className='k-d-a-text'>{kda}</span>
  }

  render() {
    if (!this.props.match || !this.props.playerInfo) {
      return null;
    }

    const { gameMode, gameType, gameCreation } = this.props.match;
    const { win } = this.props.playerInfo.stats;
    
    return (
      <tr className='match-list-item'
        onClick={this.props.handleClick}
      >
        <td>
          <ChampionDetail 
            championId={this.props.playerInfo.championId}
          /> 
        </td>
        <td>
          <ListItemDetail
            headerClass={win ? 'won-match' : 'lost-match'}
            headerText={win ? 'Won match' : 'Lost match'}
            subText={moment(gameCreation).fromNow()}
          />
        </td>
        <td>
          <ListItemDetail
            headerClass
            headerText={formatText(gameMode)}
            subText={formatText(gameType)}  
          />
        </td>
        <td>{this.getDuration()}</td>
        <td>{this.getKDA()}</td>
      </tr>
    )
  }
}

export default RecentMatchListItem;
