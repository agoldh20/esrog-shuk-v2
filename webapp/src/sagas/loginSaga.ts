import { LoginActionType } from '../actions/loginAction';
import { call, takeEvery } from '@redux-saga/core/effects';
import { LOGIN } from '../actions/actionsTypes';
import { postData } from '../httpClient';

export function* login(action: LoginActionType) {
  try {
    const response = yield call(postData, '/sessions', {
      username: action.username,
      password: action.password,
    });
  } catch (e) {}
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
