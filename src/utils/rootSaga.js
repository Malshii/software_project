import { all, takeEvery } from 'redux-saga/effects';
import * as authActionTypes from '../components/auth/redux/authActionTypes';
import * as adminActionTypes from '../components/admin/redux/adminActionTypes';
import * as doctorActionTypes from '../components/doctor/redux/doctorActionTypes';

import { loginUser, registerUser, forgotPassword, resetPassword} from '../components/auth/redux/authSaga';
import { staffRegisterUser } from '../components/admin/redux/adminSaga';
import { getDoctor } from '../components/doctor/redux/doctorSaga';

// combining all the saga file together
export default function* root() {
  yield all([
    // Home page
    takeEvery(authActionTypes.LOGIN, loginUser),
    takeEvery(authActionTypes.REGISTER, registerUser),
    takeEvery(authActionTypes.FORGOT_PASSWORD, forgotPassword),
    takeEvery(authActionTypes.RESET_PASSWORD, resetPassword),
    takeEvery(adminActionTypes.STAFF_REGISTER, staffRegisterUser),
    takeEvery(doctorActionTypes.GET_PROFILE_DATA, getDoctor),
  ]);
}
