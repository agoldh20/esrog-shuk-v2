import { call, put, takeEvery } from '@redux-saga/core/effects';
import { getData } from '../httpClient';
import { GET_ORDER } from '../actions/actionsTypes';
import { setOrder, updateOrderNote, updateOrderVoucher } from '../slices/orderSlice/orderSlice';
import { GetOrderAction } from '../actions/getOrderAction';
import { LineItemType, setOpenOrderLineItems } from '../slices/lineItemsSlice/lineItemsSlice';
import camelcaseKeys from 'camelcase-keys';
import { getAvailableItems } from './getAvailableItemsSaga';

export function* getOrder(action: GetOrderAction) {
  try {
    const orderResponse = yield call(getData, `/api/v1/orders/${action.orderId}`);
    yield put(setOrder(orderResponse));

    const lineItemResponse = yield call(getData, `/api/v1/line_items/?order_id=${action.orderId}`);
    const lineItems = [] as LineItemType[];
    lineItemResponse.forEach(lineItem => {
      lineItem.lineId = Math.floor(Math.random() * 10000);
      lineItems.push(camelcaseKeys(lineItem));
    });
    yield put(setOpenOrderLineItems(lineItems));

    const noteResponse = yield call(getData, `/api/v1/notes/?order_id=${action.orderId}`);
    if (noteResponse) {
      yield put(updateOrderNote(noteResponse[0]));
    }

    const voucherResponse = yield call(getData, `/api/v1/vouchers/?order_id=${action.orderId}`);
    if (voucherResponse) {
      yield put(updateOrderVoucher(voucherResponse[0]));
    }

    if (orderResponse.status === 'paid') {
      action.navigate(`/checkout?id=${action.orderId}`);
    } else {
      action.navigate(`/order?id=${action.orderId}`);
    }
  } catch (e) {}
}

export function* watchGetOrder() {
  yield takeEvery(GET_ORDER, getOrder);
}
