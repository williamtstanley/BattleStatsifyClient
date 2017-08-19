import React, { Component } from 'react';
import './TitleText.css';

export default class TitleText extends Component {
  render() {
    return (
      <h2>{this.props.children}</h2>
    );
  }
}
