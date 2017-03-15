
import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => {

  return (
    APIUtil.login(user)
    .then(returned => dispatch(receiveCurrentUser(returned)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const logout = () => dispatch => (
  APIUtil.logout()
  .then(user => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => {

  return (
    APIUtil.signup(user)
    .then(() => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  );
};

export const receiveCurrentUser = currentUser => {

  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveErrors = errors => {

  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};
