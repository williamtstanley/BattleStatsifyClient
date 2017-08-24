import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import moment from 'moment';
import uiActions from '../../actions/uiActions';
import ChampionDetail from './ChampionDetail';
import ListItemDetail from './ListItemDetail';

@connect(
  undefined,
  (dispatch, ownProps) => ({
    handleClick: () => {
      dispatch(uiActions.setMatchDetails(ownProps.match))
      dispatch(uiActions.toggleModal('matchDetails'))
    }
  })
)
class RecentMatchListItem extends Component {
  formatText(text) {
    text = text.replace('_',' ') 
    return `${text[0]}${text.slice(1).toLowerCase()}`
  }

  getDuration() {
    const duration = moment.duration(this.props.match.gameDuration * 1000)
    return `${duration.minutes()}:${duration.seconds()}`
  }

  getKDA() {
    const { kills, assists, deaths } = this.props.playerInfo.stats
    const kda = `${kills}/${deaths}/${assists}`
    return <span className='k-d-a-text'>{kda}</span>
  }

  render() {
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
            headerText={this.formatText(gameMode)}
            subText={this.formatText(gameType)}  
          />
        </td>
        <td>{this.getDuration()}</td>
        <td>{this.getKDA()}</td>
      </tr>
    )
  }
}

export default RecentMatchListItem;
