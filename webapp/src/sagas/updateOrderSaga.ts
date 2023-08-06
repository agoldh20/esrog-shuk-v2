import { call, put, takeEvery } from '@redux-saga/core/effects';
import { patchData } from '../httpClient';
import { UPDATE_ORDER } from '../actions/actionsTypes';
import { UpdateOrderActionType } from '../actions/updateOrderAction';
import { updateOrderStatus } from '../slices/orderSlice/orderSlice';

export function* updateOrder(action: UpdateOrderActionType) {
  try {
    const response = yield call(patchData, `/api/v1/orders/${action.orderId}`, {
      order: {
        status: action.status,
        payment_type: action.paymentType,
        total: action.total,
      },
    });

    yield put(updateOrderStatus(response.status));
  } catch (e) {}
}

export function* watchUpdateOrder() {
  yield takeEvery(UPDATE_ORDER, updateOrder);
}
