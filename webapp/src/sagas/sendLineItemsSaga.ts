import { call, select, takeEvery } from '@redux-saga/core/effects';
import { SEND_LINE_ITEMS } from '../actions/actionsTypes';
import { postDataWithHeaders } from '../httpClient';
import { SendLineItemsActionType } from '../actions/sendLineItemsAction';
import camelToSnakeCase from '../helpers/camelToSnakeCase';
import { getJwt, headers } from '../helpers/headerInfo';

export function* sendLineItems(action: SendLineItemsActionType): any {
  const jwt = yield select(getJwt);

  try {
    const newPayload: any = [];
    action.items.forEach(item => {
      const newItem = {};
      for (const [ key, value ] of Object.entries(item)) {
        newItem[`${ camelToSnakeCase(key) }`] = value;
      }

      newPayload.push(newItem);
    });

    yield call(postDataWithHeaders, '/api/v1/line_items/', headers(jwt), {
      order_id: action.orderId,
      line_items: newPayload,
    });

    action.navigate(`/checkout?id=${ action.orderId }`);
  } catch (e) {}
}

export function* watchSendLineItems() {
  yield takeEvery(SEND_LINE_ITEMS, sendLineItems);
}
