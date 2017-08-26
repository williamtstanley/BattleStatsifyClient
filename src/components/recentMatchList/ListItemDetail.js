import React from 'react';

const ListItemDetail = (props) => (
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
);

export default ListItemDetail;
