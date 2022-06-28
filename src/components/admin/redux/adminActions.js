import * as actionTypes from './adminActionTypes';

export function staffRegisterUser(data) {
  return { type: actionTypes.STAFF_REGISTER, data };
}
