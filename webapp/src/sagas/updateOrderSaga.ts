import { call, put, takeEvery } from '@redux-saga/core/effects';
import { patchDataWithHeaders } from '../httpClient';
import { UPDATE_ORDER } from '../actions/actionsTypes';
import { UpdateOrderActionType } from '../actions/updateOrderAction';
import { updateOrderStatus } from '../slices/orderSlice/orderSlice';
import { resetUser } from '../slices/userSlice/userSlice';

export function* updateOrder(action: UpdateOrderActionType) {

  try {
    const response = yield call(patchDataWithHeaders, `/api/v1/orders/${ action.orderId }`, action.headers, {
      order: {
        status: action.status,
        payment_type: action.paymentType,
        total: action.total,
      },
    });

    yield put(updateOrderStatus(response.status));
  } catch (e) {
    yield put(resetUser())
    alert("Sorry, Login Expired! Please Login again")
    action.navigate('/login')
  }
}

export function* watchUpdateOrder() {
  yield takeEvery(UPDATE_ORDER, updateOrder);
}
