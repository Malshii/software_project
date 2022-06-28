import { toast } from 'react-toastify';
import { put } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './adminActionTypes';

export function* staffRegisterUser(action) {
  const Axios = yield createRequest();
  console.log('saga', action.data)
  try {
    const { data } = yield Axios.post('admin/staff-register', action.data);
    toast.success('Registered Successfully');
    yield put({
      type: actionTypes.STAFF_REGISTER_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: actionTypes.STAFF_REGISTER_ERROR,
      data: error.response.data
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}
