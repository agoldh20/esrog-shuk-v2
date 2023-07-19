import { call, put, takeEvery } from '@redux-saga/core/effects';
import { GET_CUSTOMER_LIST, SAVE_NEW_CUSTOMER } from '../actions/actionsTypes';
import { setCustomerList } from '../slices/customerListSlice/customerListSlice';
import { getData, postData } from '../httpClient';
import camelcaseKeys from 'camelcase-keys';
import { CustomerType } from '../slices/types';
import { SaveNewCustomerActionType } from '../actions/newCustomerAction';

export function* saveNewCustomer(action: SaveNewCustomerActionType): any {
  try {
    console.log('=============>', 'in saga');
    const request = yield call(postData, '/api/v1/customers', {
      first_name: action.firstName,
      last_name: action.lastName,
      phone_number: action.phoneNumber,
      email: action.email,
    });

    action.navigate(`/customer/${request.id}`)

    console.log('=============>', request);
  } catch (e) {}
}

export function* watchSaveNewCustomer() {
  yield takeEvery(SAVE_NEW_CUSTOMER, saveNewCustomer)
}
