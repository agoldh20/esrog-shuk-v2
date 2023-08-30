import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { patchDataWithHeaders } from '../httpClient';
import { UPDATE_ORDER } from '../actions/actionsTypes';
import { UpdateOrderActionType } from '../actions/updateOrderAction';
import { updateOrderStatus } from '../slices/orderSlice/orderSlice';
import { getJwt, headers } from '../helpers/headerInfo';

export function* updateOrder(action: UpdateOrderActionType) {
  const jwt = yield select(getJwt);

  try {
    const response = yield call(patchDataWithHeaders, `/api/v1/orders/${ action.orderId }`, headers(jwt), {
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
