import { call, put, takeEvery } from '@redux-saga/core/effects';
import { GET_CUSTOMER_LIST } from '../actions/actionsTypes';
import { setCustomerList } from '../slices/customerListSlice/customerListSlice';
import { getData } from '../httpClient';
import camelcaseKeys from 'camelcase-keys';
import { CustomerType } from '../slices/types';

export function* getCustomerList() {
  try {
    const request = yield call(getData, '/api/v1/customers');
    const customers = [] as CustomerType[];
    request.forEach(c => customers.push(camelcaseKeys(c)));
    yield put(setCustomerList(customers));
  } catch (e) {}
}

export function* watchGetCustomerList() {
  yield takeEvery(GET_CUSTOMER_LIST, getCustomerList)
}
