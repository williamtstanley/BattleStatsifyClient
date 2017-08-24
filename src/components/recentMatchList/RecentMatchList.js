import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecentMatchListItem from './RecentMatchListItem';
import './RecentMatchList.css';

@connect(
  (state) => {
    return {
      matches: state.matches || [],
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
          <RecentMatchListItem key={index} match={match} stats={particapantInfo.stats} />
        )
      }) : null;
  }
  render() {
    return (
      <div aria-hidden={!this.props.matches.length}>
        <table className='recent-match-container'>
        <thead>
          <tr>
            <th>hero</th>
            <th>result</th>
            <th>type</th>
            <th>duration</th>
            <th>kda</th>
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

