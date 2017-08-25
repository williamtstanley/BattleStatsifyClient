import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDuration } from '../../helpers';
import TeamDetails from './TeamDetails';
import './MatchDetails.less';

@connect(
  (state) => {
    const getTeams = () => {
      const { participantIdentities, participants } = state.matchDetails;
      return participants.reduce((acc, p) => {
        let teamName = p.teamId === 100 ? 'team1' : 'team2'
        let team = acc[teamName] || [];
        const player = participantIdentities
          .find((pId) => pId.participantId === p.participantId)  
        if (player && player.player) p = Object.assign({}, p, {
          playerDetails: player.player
        });
        team.push(p)
        
        return Object.assign({}, acc, {
          [teamName]: team,
        })
      }, {})
    }
    
    return {
      match: state.matchDetails,
      teams: getTeams(),
    }
  }
)
class MatchDetails extends Component {
  getKillCount(team) {
    return team.reduce((a, b) => a + b.stats.kills, 0)
  }
  render() {
    if (!this.props.match) {
      return null;
    }
    const { teams, match } = this.props;
    return (
      <div className="match-details-container">
        <div className='score-board'>
          <span>{this.getKillCount(teams.team1)}</span>
          <span>{getDuration(match.gameDuration)}</span>
          <span>{this.getKillCount(teams.team2)}</span>
        </div>
        <TeamDetails team={teams.team1}/>
        <TeamDetails team={teams.team2}/>
      </div>
    )
  }
}

export default MatchDetails;

