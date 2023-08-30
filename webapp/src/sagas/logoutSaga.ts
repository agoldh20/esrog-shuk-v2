import { call, put, takeEvery } from '@redux-saga/core/effects';
import { LOGOUT } from '../actions/actionsTypes';
import { deleteData } from '../httpClient';
import { resetUser } from '../slices/userSlice/userSlice';
import { LogoutActionType } from '../actions/logoutAction';

export function* logout(action: LogoutActionType) {
  try {
    yield call(deleteData, '/logout');

    yield put(resetUser())

    action.navigate('/login')
  } catch (e) {}
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}
