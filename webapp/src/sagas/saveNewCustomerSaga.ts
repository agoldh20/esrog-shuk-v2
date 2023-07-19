import { call, put, takeEvery } from '@redux-saga/core/effects';
import { SAVE_NEW_CUSTOMER } from '../actions/actionsTypes';
import { postData } from '../httpClient';
import camelcaseKeys from 'camelcase-keys';
import { SaveNewCustomerActionType } from '../actions/newCustomerAction';
import { setCustomer } from '../slices/customerSlice/customerSlice';

export function* saveNewCustomer(action: SaveNewCustomerActionType): any {
  try {
    const request = yield call(postData, '/api/v1/customers', {
      first_name: action.firstName,
      last_name: action.lastName,
      phone_number: action.phoneNumber,
      email: action.email,
    });

    yield put(setCustomer(camelcaseKeys(request)));

    action.navigate(`/customer?id=${request.id}`)

    console.log('=============>', request);
  } catch (e) {}
}

export function* watchSaveNewCustomer() {
  yield takeEvery(SAVE_NEW_CUSTOMER, saveNewCustomer)
}
