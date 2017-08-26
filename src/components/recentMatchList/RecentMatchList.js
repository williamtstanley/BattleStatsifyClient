import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentMatchListItem from './RecentMatchListItem';
import { Modal, MatchDetails } from '../';
import './RecentMatchList.less';

@connect(
  (state) => {
    return {
      summoner: state.summoner,
      matches: state.matches,
      error: state.summonerError,
      loadingData: state.loadingData,
    }
  }
)
class RecentMatchList extends Component {
  renderList() {
    return this.props.matches.map((match, index) => {
      if (match) {
        const { participantIdentities, participants } = match;
        const player = participantIdentities
          .find((pId) => (pId.player &&
            (pId.player.summonerId === this.props.summoner.id ||
              pId.player.accountId === this.props.summoner.accountId)
          ));
        if (!player) debugger;
        const particapantInfo = player ? participants
          .find((p) => p.participantId === player.participantId) : null;

        return player ? (
          <RecentMatchListItem key={index} match={match} playerInfo={particapantInfo} />
        ) : null;
      }
      return null;
    })
  }
  render() {
    if (this.props.loadingData || !this.props.matches) {
      return null;
    }
    return (
      <div aria-hidden={ !!this.props.error || !this.props.matches.length}>
        <Modal name='matchDetails'>
        <MatchDetails />
        </Modal>
        <table className='recent-match-container'>
        <thead>
          <tr>
            <th>Champion</th>
            <th>Result</th>
            <th>Type</th>
            <th>Duration</th>
            <th>KDA</th>
          </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
        </div>
    )
  }
}

export default RecentMatchList;

