import { call, put, takeEvery } from '@redux-saga/core/effects';
import { GET_CUSTOMER_LIST } from '../actions/actionsTypes';
import { resetCustomerList, setCustomerList } from '../slices/customerListSlice/customerListSlice';
import { getData } from '../httpClient';
import camelcaseKeys from 'camelcase-keys';
import { CustomerType } from '../slices/customerSlice/customerSlice';

export function* getCustomerList() {
  try {
    const request = yield call(getData, '/api/v1/customers');

    const customerList = [] as CustomerType[];
    request.forEach(c => customerList.push(camelcaseKeys(c)));

    yield put(setCustomerList(customerList));
  } catch (e) {}
}

export function* watchGetCustomerList() {
  yield takeEvery(GET_CUSTOMER_LIST, getCustomerList);
}
