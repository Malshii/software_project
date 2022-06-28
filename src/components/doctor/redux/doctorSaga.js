import { put } from 'redux-saga/effects';
import createRequest from '../../../utils/axios';
import * as actionTypes from './doctorActionTypes';
import { toast } from 'react-toastify';

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

export function* requestNewSchedule(action) {
  const Axios = yield createRequest();
  try {
    const { data } = yield Axios.post('schedule/request', action.data);
    toast.success('Request sent successfully');
    yield put({
      type: actionTypes.NEW_SCHEDULE_SUCCESS,
      data,
    });
    action.data.navigate("/addNewSchedule");

  } catch (error) {
    yield put({
      type: actionTypes.NEW_SCHEDULE_ERROR,
      data: error.response.data
    });
    toast.error(error.response ? error.response.data.message : 'Unknown Error');
  }
}


// const Axios = yield createRequest();
//   console.log('saga', action.data)
//   try {
//     const { data } = yield Axios.post('admin/staff-register', action.data);
//     toast.success('Registered Successfully');
//     yield put({
//       type: actionTypes.STAFF_REGISTER_SUCCESS,
//       data,
//     });
//   } catch (error) {
//     yield put({
//       type: actionTypes.STAFF_REGISTER_ERROR,
//       data: error.response.data
//     });
//     toast.error(error.response ? error.response.data.message : 'Unknown Error');