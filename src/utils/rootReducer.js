import { combineReducers } from 'redux';
import authReducer from '../components/auth/redux/authReducer';
import adminReducer from "../components/admin/redux/adminReducer";
import doctorReducer from "../components/doctor/redux/doctorReducer";

// combining all the reducers in here
export default combineReducers({
  authReducer,
  adminReducer,
  doctorReducer
});
