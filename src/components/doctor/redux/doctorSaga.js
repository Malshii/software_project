import { put } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './doctorActionTypes';

export function* getDoctor(action) {
  const Axios = yield createRequest();
  try {
    console.log(action.data)
    const { data } = yield Axios.post('doctor/get-profile', action.data);
    console.log(data)
    yield put({
      type: actionTypes.GET_PROFILE_DATA_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.GET_PROFILE_DATA_ERROR,
      data: error.response.data
    });
  }
}
