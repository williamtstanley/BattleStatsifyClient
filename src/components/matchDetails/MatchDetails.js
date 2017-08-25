import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  render() {
    if (!this.props.match) {
      return null;
    }
    return (
      <div className="match-details-container">
        <TeamDetails team={this.props.teams.team1}/>
        <TeamDetails team={this.props.teams.team2}/>
      </div>
    )
  }
}

export default MatchDetails;

