import { all, fork } from '@redux-saga/core/effects';
import { watchGetCustomerList } from './customerListSaga';
import { watchSaveNewCustomer } from './saveNewCustomerSaga';
import { watchStartNewOrder } from './startNewOrderSaga';
import { watchGetAvailableItems } from './getAvailableItemsSaga';
import { watchSendLineItems } from './sendLineItemsSaga';
import { watchUpdateOrder } from './updateOrderSaga';
import { watchGetOpenOrder } from './getOpenOrderOrderSaga';

export default function* rootSaga(): any {
  yield all([
    fork(watchGetCustomerList),
    fork(watchSaveNewCustomer),
    fork(watchStartNewOrder),
    fork(watchGetAvailableItems),
    fork(watchSendLineItems),
    fork(watchUpdateOrder),
    fork(watchGetOpenOrder),
  ]);
}
