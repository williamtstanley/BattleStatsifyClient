import React, { Component } from 'react';
import { connect } from 'react-redux';
import uiActions from '../../actions/uiActions';
import './Modal.less';

@connect(
  (state) => ({
    modalOpen: state.modalOpen,
  }),
  (dispatch) => ({
    onClose: () => dispatch(uiActions.toggleModal())
  })
)

class Modal extends Component {
  handleExitClick(e) {
    if (e.target.className === 'backdrop') {
      this.props.onClose()
    }
  } 
  render() {
    if (!this.props.modalOpen) {
      return null
    }
    return (
      <div 
        onClick={(e) => this.handleExitClick(e)}
        className="backdrop"
        >
        <div className="modal">
          <div className="header">
            <i 
              onClick={this.props.onClose}
              className="fa fa-times close-icon"
            >
            </i>
          </div>  
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Modal;
