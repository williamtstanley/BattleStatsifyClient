import React, { Component }  from 'react';
import { connect } from 'react-redux';
import apiActions from '../../actions/apiActions';
import uiActions from '../../actions/uiActions';
import './SearchInput.css';

@connect(
  (state) => {
    return {
      search: state.inputs && state.inputs.search
    }
  },
  (dispatch) => {
    return {
      getSummonerData: (name) => dispatch(
        apiActions.getSummonerData(name)
      ),
      textInputChange: (value) => dispatch(
        uiActions.textInputChange('search', value)
      )
    }
  }
)
export default class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleSubmit(e) {
		e.preventDefault();
    this.props.getSummonerData(this.props.search)
  }
  
  handleChange(e) {
    this.props.textInputChange(e.target.value)
  }
  
  render() {
    return (
      <form
        className='search-form'
        onSubmit={this.handleSubmit}
      >
        <input 
          type={'text'}
					onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    )
  }
}
