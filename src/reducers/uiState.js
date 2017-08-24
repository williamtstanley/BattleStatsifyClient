import actionConstants from '../actions/actionTypeConstants';

const {
  SUMMONER_DATA_SUCCESS,
  SUMMONER_DATA_FAILURE,
  TEXT_INPUT_CHANGE,
  IMAGE_LOADED,
} = actionConstants;

const initialState = {};

const handlers = {
  [SUMMONER_DATA_FAILURE]: (state, action) => {
    return Object.assign({}, state, {
      summonerError: action.payload,
      summoner: undefined,
    });
  },
  [SUMMONER_DATA_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      summoner: action.payload.summoner,
      matches: action.payload.matches,
      summonerError: undefined,
    });
  },
  [TEXT_INPUT_CHANGE]: (state, action) => {
    return Object.assign({}, state, {
      inputs: Object.assign({}, state.inputs, {
        [action.payload.fieldName]: action.payload.value,
      }),
    });
  },
  [IMAGE_LOADED]: (state, action) => {
    return Object.assign({}, state, {
      [`${action.payload}Loaded`]: true,
    });
  },
};

export default (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};
