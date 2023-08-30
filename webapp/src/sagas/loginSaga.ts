import { LoginActionType } from '../actions/loginAction';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import { LOGIN } from '../actions/actionsTypes';
import { postData } from '../httpClient';
import { setUser } from '../slices/userSlice/userSlice';

export function* login(action: LoginActionType) {
  try {
    const response = yield call(postData, '/sessions', {
      username: action.username,
      password: action.password,
    });

    if (response.status === 'created') {
      yield put(setUser({ ...response.user, jwt: response.jwt }));
      action.navigate('/home')
    } else {
      alert("Invalid request, please try again")
    }

  } catch (e) {}
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
