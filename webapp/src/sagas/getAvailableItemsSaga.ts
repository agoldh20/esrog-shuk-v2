import { call, put, takeEvery } from '@redux-saga/core/effects';
import { GET_AVAILABLE_ITEMS } from '../actions/actionsTypes';
import { getData } from '../httpClient';
import { setItems } from '../slices/itemsSlice/itemsSlice';

export function* getAvailableItems() {
  try {
    const request = yield call(getData, '/api/v1/available-items');

    yield put(setItems(request));
  } catch (e) {}
}

export function* watchGetAvailableItems() {
  yield takeEvery(GET_AVAILABLE_ITEMS, getAvailableItems);
}
