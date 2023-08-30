import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { GET_CUSTOMER_LIST } from '../actions/actionsTypes';
import { setCustomerList } from '../slices/customerListSlice/customerListSlice';
import { getDataWithHeaders } from '../httpClient';
import camelcaseKeys from 'camelcase-keys';
import { CustomerType } from '../slices/customerSlice/customerSlice';
import { getJwt, headers } from '../helpers/headerInfo';

export function* getCustomerList() {
  const jwt = yield select(getJwt);

  try {
    const request = yield call(getDataWithHeaders, '/api/v1/customers', headers(jwt));

    const customerList = [] as CustomerType[];
    request.forEach(c => customerList.push(camelcaseKeys(c)));

    yield put(setCustomerList(customerList));
  } catch (e) {}
}

export function* watchGetCustomerList() {
  yield takeEvery(GET_CUSTOMER_LIST, getCustomerList);
}
