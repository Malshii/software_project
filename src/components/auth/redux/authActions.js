import * as actionTypes from './authActionTypes';

// Actions happening in home page

export function loginUser(data) {
  return { type: actionTypes.LOGIN, data };
}

export function toggleTheme() {
  return { type: actionTypes.TOGGLE_THEME };
}


export function logOutUser() {
  localStorage.removeItem('idToken');
  localStorage.removeItem('chamal-medicare-auth-cart-list');
  return { type: actionTypes.LOG_OUT };
}

export function registerUser(data) {
  return { type: actionTypes.REGISTER, data };
}

export function addDoctorProfile(data) {
  return { type: actionTypes.DOCTOR_PROFILE, data };
}
