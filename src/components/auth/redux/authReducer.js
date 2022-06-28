import * as actionTypes from './authActionTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: false,
  user: null,
  idToken: null,
  errorMessage: '',
  successMessage: '',
  theme: 'light'
};

// all the home page actions are handled here
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.OPEN_CLOSE_FORMS:
      return { ...state, ...action.data };
    case actionTypes.LOGIN:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.data.user,
        idToken: action.data.token,
        loading: false,
        error: false,
        errorMessage: ''
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: true,
        errorMessage: action.data.message
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: undefined,
        theme: 'light',
        idToken: undefined,
      };
    case actionTypes.REGISTER:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        RegisterFormOpen: false,
        isAuthenticated: false,
        loading: false,
      };
    case actionTypes.REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.data.message
      };
    case actionTypes.FORGOT_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: '',
        successMessage: action.data.message
      };
    case actionTypes.FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.data.message
      };
    case actionTypes.RESET_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: ''
      };
    case actionTypes.RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.data.message
      };
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };      
        case actionTypes.SIGNUP_ROLES:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.SIGNUP_ROLES_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.data.user,
        idToken: action.data.token,
        loading: false,
        error: false,
        errorMessage: ''
      };
    case actionTypes.SIGNUP_ROLES_ERROR:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: true,
        errorMessage: action.data.message
      };
    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: 'chamal-medicare-auth-',
  key: 'cart-list',
  storage,
  blacklist: ['error','theme','successMessage']
};

export default persistReducer(persistConfig, reducer);
