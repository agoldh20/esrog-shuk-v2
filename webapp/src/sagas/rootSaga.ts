import {all, fork} from "@redux-saga/core/effects";
import { watchGetCustomerList } from './customerListSaga';

export default function* rootSaga(): any {
    yield all([
        fork(watchGetCustomerList)
    ]);
}
