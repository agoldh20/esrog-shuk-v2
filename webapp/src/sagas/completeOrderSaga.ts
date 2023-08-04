import { call, put, takeEvery } from '@redux-saga/core/effects';
import { patchData } from '../httpClient';
import { COMPLETE_ORDER } from '../actions/actionsTypes';
import { CompleteOrderActionType } from '../actions/completeOrderAction';
import { updateOrderStatus } from '../slices/orderSlice/orderSlice';

export function* completeOrder(action: CompleteOrderActionType) {
  try {
    const response = yield call(patchData, '/api/v1/order/', { order_id: action.orderId, status: "paid" });

    yield put(updateOrderStatus(response.status))
  } catch (e) {}
}

export function* watchCompleteOrder() {
  yield takeEvery(COMPLETE_ORDER, completeOrder);
}
