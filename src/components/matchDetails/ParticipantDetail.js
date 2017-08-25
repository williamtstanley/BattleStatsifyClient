import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChampionDetail } from '../';
import { formatThousands, getPerMin } from '../../helpers';
import { apiActions, uiActions } from '../../actions'
import ItemList from './ItemList';

const laneValues = {
  BOTTOM: 'Bot',
  TOP: 'Top',
  MIDDLE: 'Mid',
  JUNGLE: 'Jungle',
}

const roleValues = {
  SOLO: 'Solo',
  DUO: 'Duo',
  NONE: 'None',
  DUO_CARRY: 'Duo Carry',
  DUO_SUPPORT: 'Duo Support', 
}

@connect(
  undefined,
  (dispatch) => ({
    getSummonerData: (name) => {
      dispatch(apiActions.getSummonerData(name));
      dispatch(uiActions.toggleModal())
    },
  })
)
class ParticipantDetail extends Component {
  handleNameClick(details) {
    if (details) {
      this.props.getSummonerData(details.summonerName)      
    }
  }
  getItemList(stats) {
    return Object.keys(stats).reduce((acc, key) =>{
      return key.includes('item') && stats[key] !== 0 ? acc.concat(stats[key]) : acc;
    }, [])
  }

  render() {
    const { playerDetails, championId, stats, timeline } = this.props.participant;
    console.log(this.props.participant)
    return (
      <tr>
        <td className='champ-details-container'>
          <ChampionDetail 
            championId={championId}
            noText
          />
        <span className='champ-level'>{stats.champLevel}</span>
        </td>
        <td>{roleValues[timeline.role]}</td>
        <td>{laneValues[timeline.lane]}</td>
        <td 
          className='player-name'
          onClick={() => this.handleNameClick(playerDetails)}
        >
          {(playerDetails && playerDetails.summonerName) || 'Anonymous'}
        </td>
        <td>{stats.kills}</td>
        <td>{stats.deaths}</td>
        <td>{stats.assists}</td>
        <td className='gold-text'>{formatThousands(stats.goldEarned)}</td>
        <td>{stats.totalMinionsKilled}</td>
        <td>{getPerMin(timeline.goldPerMinDeltas)}</td>
        <td>{getPerMin(timeline.xpPerMinDeltas)}</td>
        <td>{formatThousands(stats.totalDamageDealtToChampions)}</td>
        <td>{formatThousands(stats.totalHeal)}</td>
        <td>{formatThousands(stats.damageDealtToTurrets)}</td>
        <td>{stats.wardsPlaced}</td>
        <td className='td-image-container'>
          <ItemList list={this.getItemList(stats)}/>
        </td>
      </tr>
    );
  }
}

export default ParticipantDetail;
