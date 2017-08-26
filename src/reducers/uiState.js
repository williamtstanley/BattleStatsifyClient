import actionConstants from '../actions/actionTypeConstants';

const {
  SUMMONER_DATA_SUCCESS,
  SUMMONER_DATA_FAILURE,
  TEXT_INPUT_CHANGE,
  IMAGE_LOADED,
  FETCH_STATIC_SUCCESS,
  TOGGLE_MODAL,
  SET_MATCH_DETAILS,
  CLEAR_SUMMONER_DATA,
  FETCHING_DATA,
} = actionConstants;

const initialState = {
  modalOpen: false,
};

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
  [CLEAR_SUMMONER_DATA]: (state, action) => {
    return Object.assign({}, state, {
      summoner: undefined,
      matches: undefined,
    })
  },
  [FETCHING_DATA]: (state, action) => {
    return Object.assign({}, state, {
      loadingData: !state.loadingData,
    })
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
  [FETCH_STATIC_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      champions: action.payload
    })
  },
  [TOGGLE_MODAL]: (state, action) => {
    return Object.assign({}, state, {
      modalOpen: !state.modalOpen,
    }) 
  },
  [SET_MATCH_DETAILS]: (state, actions) => {
    return Object.assign({}, state, {
      matchDetails: actions.payload
    })
  }
};

export default (state = initialState, action) => {
  if (handlers[action.type]) {
    return handlers[action.type](state, action);
  }
  return state;
};
