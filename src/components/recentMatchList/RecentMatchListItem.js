import React, { Component } from 'react';
import moment from 'moment';

const ListItemTd = (props) => (
  <td>
    <ul>
      <li>
        <span className={props.headerClass}>
          {props.headerText}
        </span>
      </li>
      <li>
        <span className='sub-text'>
          {props.subText}
        </span>
      </li>
    </ul>
  </td>
)

class RecentMatchListItem extends Component {
  formatText(text) {
    text = text.replace('_',' ') 
    return `${text[0]}${text.slice(1).toLowerCase()}`
  }
  renderGameType() {
    const { gameMode, gameType } = this.props.match;
    return (
      <ListItemTd 
        headerClass
        headerText={this.formatText(gameMode)}
        subText={this.formatText(gameType)}  
      />
    )
  }
  
  renderWinState() {
    const { win } = this.props.stats;
    const { gameCreation } = this.props.match;
    return (
      <ListItemTd 
        headerClass={win ? 'won-match' : 'lost-match'}
        headerText={win ? 'Won match' : 'Lost match'}
        subText={moment(gameCreation).fromNow()}
      />
    );
  }
  render() {
    return (
      <tr className='match-list-item'>
        <td></td>
        {this.renderWinState()}
        {this.renderGameType()}
        <td></td>
        <td></td>
      </tr>
    )
  }
}

export default RecentMatchListItem;
