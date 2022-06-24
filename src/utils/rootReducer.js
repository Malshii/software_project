import { combineReducers } from 'redux';
import authReducer from '../components/auth/redux/authReducer';

// combining all the reducers in here
export default combineReducers({
  authReducer,
});
