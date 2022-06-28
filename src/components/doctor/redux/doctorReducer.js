import * as actionTypes from './doctorActionTypes';

const initialState = {
  error: false,
  errorMessage: '',
  successMessage: '',
  user: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_PROFILE_DATA:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        loading: false,
        error: false,
        errorMessage: ''
      };
    case actionTypes.GET_PROFILE_DATA_ERROR:
      return {
        ...state,
        user: null,
        loading: false,
        error: true,
        errorMessage: action.data.message
      };
      case actionTypes.NEW_SCHEDULE:
        return {
          ...state,
          loading: true,
        };
      case actionTypes.NEW_SCHEDULE_SUCCESS:
        return {          
          ...state,
          loading: false,
          error: false,
          errorMessage: '',
          successMessage: action.data.message
        };
      case actionTypes.NEW_SCHEDULE_ERROR:
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
