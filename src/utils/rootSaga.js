import { all, takeEvery } from 'redux-saga/effects';
import * as homeActionTypes from '../components/auth/redux/homeActionTypes';

import { loginUser, registerUser } from '../components/auth/redux/homeSaga';

// combining all the saga file together
export default function* root() {
  yield all([
    // Home page
    takeEvery(homeActionTypes.LOGIN, loginUser),
    takeEvery(homeActionTypes.REGISTER, registerUser),   
  ]);
}
