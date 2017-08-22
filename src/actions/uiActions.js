import actionConstants from './actionTypeConstants';

const {
  TEXT_INPUT_CHANGE,
  IMAGE_LOADED
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
}

export default actions;
