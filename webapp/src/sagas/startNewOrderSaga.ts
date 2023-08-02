import { call, put, takeEvery } from '@redux-saga/core/effects';
import { START_NEW_ORDER } from '../actions/actionsTypes';
import { postData } from '../httpClient';
import { StartNewOrderActionType } from '../actions/newOrderAction';
import { setOrder } from '../slices/orderSlice/orderSlice';

export function* startNewOrder(action: StartNewOrderActionType): any {
  try {
    const request = yield call(postData, '/api/v1/orders/', {
      customer_id: action.customerId,
      user_id: action.userId,
    });

    yield put(setOrder(request));

    action.navigate(`/order?id=${request.id}`);
  } catch (e) {}
}

export function* watchStartNewOrder() {
  yield takeEvery(START_NEW_ORDER, startNewOrder);
}
