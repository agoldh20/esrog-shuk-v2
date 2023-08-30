import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { START_NEW_ORDER } from '../actions/actionsTypes';
import { postDataWithHeaders } from '../httpClient';
import { StartNewOrderActionType } from '../actions/newOrderAction';
import { setOrder } from '../slices/orderSlice/orderSlice';
import camelcaseKeys from 'camelcase-keys';
import { getJwt, headers } from '../helpers/headerInfo';

export function* startNewOrder(action: StartNewOrderActionType): any {
  const jwt = yield select(getJwt);

  try {
    const request = yield call(postDataWithHeaders, '/api/v1/orders/', headers(jwt), {
      customer_id: action.customerId,
      user_id: action.userId,
    });

    yield put(setOrder(camelcaseKeys(request)));

    action.navigate(`/order?id=${ request.id }`);
  } catch (e) {}
}

export function* watchStartNewOrder() {
  yield takeEvery(START_NEW_ORDER, startNewOrder);
}
