import * as actionTypes from './doctorActionTypes';

export function getDoctor(data) {
  return { type: actionTypes.GET_PROFILE_DATA, data };
}
