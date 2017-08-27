import React from 'react';
import { ToolTip } from '../';

const columnHeaders = [
  {
    displayText: 'Champ',
    toolTipText: 'Champion'
  },
  {
    displayText: 'R',
    toolTipText: 'Role'
  },
  {
    displayText: 'L',
    toolTipText: 'Lane'
  },
  {
    displayText: 'Player',
    toolTipText: 'Player Name'
  },
  {
    displayText: 'K',
    toolTipText: 'Kills'
  },
  {
    displayText: 'D',
    toolTipText: 'Deaths'
  },
  {
    displayText: 'A',
    toolTipText: 'Assists'
  },
  {
    displayText: 'NET',
    toolTipText: 'Net Worth',
    className: 'gold-Text'
  },
  {
    displayText: 'CS',
    toolTipText: 'Creep Score'
  },
  {
    displayText: 'GPM',
    toolTipText: 'Gold per Minute'
  },
  {
    displayText: 'XPM',
    toolTipText: 'Experience per Minute'
  },
  {
    displayText: 'DMG',
    toolTipText: 'Total damage to enemy champions'
  },
  {
    displayText: 'HEAL',
    toolTipText: 'Total healing to allies'
  },
  {
    displayText: 'BLD',
    toolTipText: 'Total damage to enemy buildings'
  },
  {
    displayText: 'WARDS',
    toolTipText: 'Wards Placed'
  },
  {
    displayText: 'ITEMS',
    toolTipText: 'Player Items at game end'
  },
]

const TableHeaderContent = (props) => (
  <th className={props.className}>
    <ToolTip tip={<span>{props.toolTipText}</span>}>
      {props.displayText}
    </ToolTip>
  </th>
)

const TeamDetailHeader = (props) => (
  <thead>
    <tr>
      <th 
        className='team-detail-title'
        colSpan='16'
      >
        {props.title}
      </th>
    </tr>
    <tr>
      {
        columnHeaders.map((header, index) => (
          <TableHeaderContent 
            key={index}
            toolTipText={header.toolTipText}
            displayText={header.displayText}
            className={header.className}
          />
        ))
      }
    </tr>
    </thead>
)

export default TeamDetailHeader;

