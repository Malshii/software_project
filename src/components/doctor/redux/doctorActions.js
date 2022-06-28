import * as actionTypes from './doctorActionTypes';

export function getDoctor(data) {
  return { type: actionTypes.GET_PROFILE_DATA, data };
}

export function requestNewSchedule(data) {
  return { type: actionTypes.NEW_SCHEDULE, data };
}
