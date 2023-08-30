import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { GET_AVAILABLE_ITEMS } from '../actions/actionsTypes';
import { getDataWithHeaders } from '../httpClient';
import { setItems } from '../slices/itemsSlice/itemsSlice';
import { getJwt, headers } from '../helpers/headerInfo';

export function* getAvailableItems() {
  const jwt = yield select(getJwt);

  try {
    const request = yield call(getDataWithHeaders, '/api/v1/available-items', headers(jwt));

    yield put(setItems(request));
  } catch (e) {}
}

export function* watchGetAvailableItems() {
  yield takeEvery(GET_AVAILABLE_ITEMS, getAvailableItems);
}
