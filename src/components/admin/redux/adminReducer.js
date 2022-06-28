import * as actionTypes from './adminActionTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  loading: false,
  error: false,
  errorMessage: '',
  successMessage: '',
};

// all the home page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.STAFF_REGISTER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.STAFF_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        successMessage: action.data.message
      };
    case actionTypes.STAFF_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.data.message
      };
    default:
      return state;
  }
}

export default reducer;
