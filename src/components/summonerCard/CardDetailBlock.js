import React from 'react';

const CardDetailBlock = (props) => (
  <dl>
      <dd><time>{props.displayText}</time></dd>
      <dt>{props.label}</dt>
  </dl>
)

export default CardDetailBlock;
