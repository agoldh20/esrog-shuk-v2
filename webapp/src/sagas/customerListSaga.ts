import { call, put, takeEvery } from '@redux-saga/core/effects';
import { GET_CUSTOMER_LIST } from '../actions/actionsTypes';
import { setCustomerList } from '../slices/customerListSlice/customerListSlice';
import { getDataWithHeaders } from '../httpClient';
import camelcaseKeys from 'camelcase-keys';
import { CustomerType } from '../slices/customerSlice/customerSlice';
import { GetCustomerListActionType } from '../actions/customerListAction';
import { resetUser } from '../slices/userSlice/userSlice';

export function* getCustomerList(action: GetCustomerListActionType) {
  try {
    const request = yield call(getDataWithHeaders, '/api/v1/customers', action.headers);

    const customerList = [] as CustomerType[];
    request.forEach(c => customerList.push(camelcaseKeys(c)));

    yield put(setCustomerList(customerList));
  } catch (e) {
    yield put(resetUser())
    alert("Sorry, Login Expired! Please Login again")
    action.navigate('/login')
  }
}

export function* watchGetCustomerList() {
  yield takeEvery(GET_CUSTOMER_LIST, getCustomerList);
}
