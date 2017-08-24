import React, { Component } from 'react';
import { connect } from 'react-redux';
import uiActions from '../../actions/uiActions';
import './Modal.less';

@connect(
  (state, ownProps) => ({
    show: state.modals[ownProps.name].show,
  }),
  (dispatch, ownProps) => ({
    onClose: () => dispatch(uiActions.toggleModal(ownProps.name))
  })
)

class Modal extends Component {
  render() {
    if (!this.props.show) {
      return null
    }
    return (
      <div className="backdrop">
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
