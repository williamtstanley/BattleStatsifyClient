import React, { Component } from 'react';
import './TitleText.less';

export default class TitleText extends Component {
  render() {
    return (
      <h2>{this.props.children}</h2>
    );
  }
}
