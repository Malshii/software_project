import { combineReducers } from 'redux';
import homeReducer from '../components/auth/redux/homeReducer';

// combining all the reducers in here
export default combineReducers({
  homeReducer, 
});
