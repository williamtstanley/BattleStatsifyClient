import React, { Component } from 'react';
import ParticipantDetail from './ParticipantDetail';
import TeamDetailHeader from './TeamDetailHeader';

class TeamDetails extends Component {
  renderParticipants() {
    return this.props.team.map((p, index) => {
      return (
        <ParticipantDetail key={index} participant={p}/>
      )
    })
  }

  render() {
    return (
      <table className="team-roster">
        <TeamDetailHeader /> 
        <tbody>
          {this.renderParticipants()}
        </tbody>
      </table>
    );
  }
}

export default TeamDetails;
