import { call, put, takeEvery } from '@redux-saga/core/effects';
import { SEND_LINE_ITEMS } from '../actions/actionsTypes';
import { postData } from '../httpClient';
import { setOrder } from '../slices/orderSlice/orderSlice';
import { SendLineItemsActionType } from '../actions/sendLineItemsAction';
import camelToSnakeCase from '../helpers/camelToSnakeCase';

export function* sendLineItems(action: SendLineItemsActionType): any {
  try {

    const newPayload: any = []
    action.items.forEach(item => {
      const newItem = {}
      for (const [ key, value ] of Object.entries(item)) {
        newItem[`${ camelToSnakeCase(key) }`] = value;
      }

      newPayload.push(newItem);
    })

    yield call(postData, '/api/v1/line_items/', { order_id: action.orderId, line_items: newPayload });

    action.navigate(`/checkout?id=${action.orderId}`);
  } catch (e) {
  }
}

export function* watchSendLineItems() {
  yield takeEvery(SEND_LINE_ITEMS, sendLineItems);
}
