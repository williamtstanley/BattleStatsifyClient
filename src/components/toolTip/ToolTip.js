import React, { Component } from 'react';
import './ToolTip.less';

class ToolTip extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderTip: false,
    }
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.buildClassName = this.buildClassName.bind(this);
  }
  handleMouseEnter(e) {
    this.setState({
      renderTip: true,
    })
  }
  handleMouseLeave(e) {
    this.setState({
      renderTip: false,
    })
  }

  buildClassName(defaultClass) {
    return `${defaultClass} ${this.props.className}`
  }

  render() {
    if (!this.props.tip) {
      return null;
    }
    return (
      <div
        onMouseEnter={this.handleMouseEnter}  
        onMouseLeave={this.handleMouseLeave}
        className={this.buildClassName('tool-tip-parent')}  
      >
        {this.state.renderTip ? <div className='tool-tip-container'>{this.props.tip}</div> : null}
        {this.props.children}
      </div>
    );
  }
}

export default ToolTip;
