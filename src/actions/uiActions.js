import actionConstants from './actionTypeConstants';

const {
  TEXT_INPUT_CHANGE,
  IMAGE_LOADED,
  TOGGLE_MODAL,
  SET_MATCH_DETAILS,
} = actionConstants;

const actions = {
  textInputChange: (fieldName, value) => {
    return { 
      type: TEXT_INPUT_CHANGE, 
      payload: {
        fieldName,
        value
      }
    }
  },
  imageLoaded: (fieldName) => {
    return {
      type: IMAGE_LOADED,
      payload: fieldName,
    }
  },
  toggleModal: (modalName) => {
    return {
      type: TOGGLE_MODAL,
      payload: modalName, 
    }
  },
  setMatchDetails: (match) => {
    return {
      type: SET_MATCH_DETAILS,
      payload: match
    }
  }
}

export default actions;
