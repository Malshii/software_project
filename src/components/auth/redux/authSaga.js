import { toast } from 'react-toastify';
import { put } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './authActionTypes';

// this is the request to login a user
export function* loginUser(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post('user/login', action.data);
    localStorage.setItem('idToken', data.user.token);
    console.log(data);
    yield put({
      type: actionTypes.LOGIN_SUCCESS,
      data: data.user,
    });
    action.data.navigate("/");

  } catch (error) {
    console.log('res error', error.response.data);
    yield put({
      type: actionTypes.LOGIN_ERROR,
      data: error.response.data
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}

export function* registerUser(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post('user/signup', action.data);
    toast.success('Registered Successfully');
    yield put({
      type: actionTypes.REGISTER_SUCCESS,
      data,
    });
    localStorage.removeItem('chamal-medicare-auth-cart-list');
    action.data.navigate("/login");

  } catch (error) {
    yield put({
      type: actionTypes.REGISTER_ERROR,
      data: error.response.data
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}

export function* forgotPassword(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post('user/forgot-password', action.data);
    yield put({
      type: actionTypes.FORGOT_PASSWORD_SUCCESS,
      data,
    });

  } catch (error) {
    yield put({
      type: actionTypes.FORGOT_PASSWORD_ERROR,
      data: error.response.data
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}

export function* resetPassword(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post('user/reset-password', action.data);
    yield put({
      type: actionTypes.RESET_PASSWORD_SUCCESS,
      data,
    });
    yield put({
      type: actionTypes.LOG_OUT,
      data,
    });
    action.data.navigate("/login");

  } catch (error) {
    yield put({
      type: actionTypes.RESET_PASSWORD_ERROR,
      data: error.response.data
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}

