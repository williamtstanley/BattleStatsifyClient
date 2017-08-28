import React, { Component }  from 'react';
import { connect } from 'react-redux';
import apiActions from '../../actions/apiActions';
import uiActions from '../../actions/uiActions';
import './SearchInput.less';

@connect(
  (state) => {
    return {
      search: state.inputs && state.inputs.search,
      summoner: state.summoner,
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    //TODO figure out a good way to clear search following my chosen criteria
  }
  
  handleSubmit(e) {
		e.preventDefault();
    this.props.getSummonerData(this.props.search)
    this.textInput.blur();
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
          ref={(input) => { this.textInput = input }}
          className='search'
          placeholder='Summoner name...'
					onChange={this.handleChange}
        />
        <button>Search</button>
      </form>
    )
  }
}
