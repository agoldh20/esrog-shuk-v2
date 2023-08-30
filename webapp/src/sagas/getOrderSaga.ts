import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { getData, getDataWithHeaders } from '../httpClient';
import { GET_ORDER } from '../actions/actionsTypes';
import { setOrder, updateOrderNote, updateOrderVoucher } from '../slices/orderSlice/orderSlice';
import { GetOrderAction } from '../actions/getOrderAction';
import { LineItemType, setOpenOrderLineItems } from '../slices/lineItemsSlice/lineItemsSlice';
import camelcaseKeys from 'camelcase-keys';
import { getAvailableItemsAction } from '../actions/getAvailableItemsAction';
import { getJwt, headers } from '../helpers/headerInfo';

export function* getOrder(action: GetOrderAction) {
  const jwt = yield select(getJwt);

  try {
    const orderResponse = yield call(getDataWithHeaders, `/api/v1/orders/${ action.orderId }`, headers(jwt));
    yield put(setOrder(orderResponse));

    const lineItemResponse = yield call(getDataWithHeaders, `/api/v1/line_items/?order_id=${ action.orderId }`, headers(jwt));
    const lineItems = [] as LineItemType[];
    lineItemResponse.forEach(lineItem => {
      lineItem.lineId = Math.floor(Math.random() * 10000);
      lineItems.push(camelcaseKeys(lineItem));
    });
    yield put(setOpenOrderLineItems(lineItems));

    const noteResponse = yield call(getDataWithHeaders, `/api/v1/notes/?order_id=${ action.orderId }`, headers(jwt));
    if (noteResponse) {
      yield put(updateOrderNote(noteResponse[0]));
    }

    const voucherResponse = yield call(getDataWithHeaders, `/api/v1/vouchers/?order_id=${ action.orderId }`, headers(jwt));
    if (voucherResponse) {
      yield put(updateOrderVoucher(voucherResponse[0]));
    }

    if (orderResponse.status === 'paid') {
      yield put(getAvailableItemsAction());
      action.navigate(`/checkout?id=${ action.orderId }`);
    } else {
      action.navigate(`/order?id=${ action.orderId }`);
    }
  } catch (e) {}
}

export function* watchGetOrder() {
  yield takeEvery(GET_ORDER, getOrder);
}
