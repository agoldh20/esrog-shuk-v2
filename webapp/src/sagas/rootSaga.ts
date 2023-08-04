import { all, fork } from '@redux-saga/core/effects';
import { watchGetCustomerList } from './customerListSaga';
import { watchSaveNewCustomer } from './saveNewCustomerSaga';
import { watchStartNewOrder } from './startNewOrderSaga';
import { watchGetAvailableItems } from './getAvailableItemsSaga';
import { watchSendLineItems } from './sendLineItemsSaga';
import { watchCompleteOrder } from './completeOrderSaga';

export default function* rootSaga(): any {
  yield all([
    fork(watchGetCustomerList),
    fork(watchSaveNewCustomer),
    fork(watchStartNewOrder),
    fork(watchGetAvailableItems),
    fork(watchSendLineItems),
    fork(watchCompleteOrder),
  ]);
}
