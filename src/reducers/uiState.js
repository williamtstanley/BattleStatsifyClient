import actionConstants from '../actions/actionTypeConstants';

const { CREATE_NOTE, UPDATE_NOTE } = actionConstants;

const initialState = {};

const handlers = {
  [CREATE_NOTE]: (state, action) => {
    return // some new state with new note
  },
  [UPDATE_NOTE]: (state, action) => {
    return // some new state with note updated
  }
};

export default (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};
