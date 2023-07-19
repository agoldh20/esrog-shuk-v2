import { all, fork } from "@redux-saga/core/effects";
import { watchGetCustomerList } from './customerListSaga';
import { watchSaveNewCustomer } from './saveNewCustomerSaga';

export default function* rootSaga(): any {
    yield all([
        fork(watchGetCustomerList),
        fork(watchSaveNewCustomer),
    ]);
}
