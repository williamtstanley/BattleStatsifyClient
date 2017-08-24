import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentMatchListItem from './RecentMatchListItem';
import './RecentMatchList.less';

@connect(
  (state) => {
    return {
      matches: state.matches || [],
      error: state.summonerError,
    }
  }
)
class RecentMatchList extends Component {
  renderList() {
    return this.props.matches.length ? 
      this.props.matches.map((match, index) => {
        const { participantIdentities, participants } = match;
        const player = participantIdentities
          .find((pId) => pId.player);
        const particapantInfo = participants
          .find((p) => p.participantId === player.participantId);

        return (
          <RecentMatchListItem key={index} match={match} playerInfo={particapantInfo} />
        )
      }) : null;
  }
  render() {
    return (
      <div aria-hidden={ !!this.props.error || !this.props.matches.length}>
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

