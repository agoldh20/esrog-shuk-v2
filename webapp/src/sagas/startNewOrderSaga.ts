import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { START_NEW_ORDER } from '../actions/actionsTypes';
import { postDataWithHeaders } from '../httpClient';
import { StartNewOrderActionType } from '../actions/newOrderAction';
import { setOrder } from '../slices/orderSlice/orderSlice';
import camelcaseKeys from 'camelcase-keys';
import { resetUser } from '../slices/userSlice/userSlice';

export function* startNewOrder(action: StartNewOrderActionType): any {

  try {
    const request = yield call(postDataWithHeaders, '/api/v1/orders/', action.headers, {
      customer_id: action.customerId,
      user_id: action.userId,
    });

    yield put(setOrder(camelcaseKeys(request)));

    action.navigate(`/order?id=${ request.id }`);
  } catch (e) {
    yield put(resetUser())
    alert("Sorry, Login Expired! Please Login again")
    action.navigate('/login')
  }
}

export function* watchStartNewOrder() {
  yield takeEvery(START_NEW_ORDER, startNewOrder);
}
