import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MatchDetails.less';

@connect(
  (state) => ({
    match: state.matchDetails,
  })
)
class MatchDetails extends Component {
  render() {
    if (!this.props.match) {
      return null;
    }
    return (
      <div>Match content here</div>
    )
  }
}

export default MatchDetails;

