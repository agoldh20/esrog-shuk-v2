import { call, put, takeEvery } from '@redux-saga/core/effects';
import { SAVE_NEW_CUSTOMER } from '../actions/actionsTypes';
import { postDataWithHeaders } from '../httpClient';
import camelcaseKeys from 'camelcase-keys';
import { SaveNewCustomerActionType } from '../actions/newCustomerAction';
import { setCustomer } from '../slices/customerSlice/customerSlice';
import { resetUser } from '../slices/userSlice/userSlice';

export function* saveNewCustomer(action: SaveNewCustomerActionType): any {
  try {
    const request = yield call(postDataWithHeaders, '/api/v1/customers', action.headers, {
      first_name: action.firstName,
      last_name: action.lastName,
      phone_number: action.phoneNumber,
      email: action.email,
    });

    yield put(setCustomer(camelcaseKeys(request)));

    action.navigate(`/customer?id=${request.id}`);
  } catch (e) {
    yield put(resetUser())
    alert("Sorry, Login Expired! Please Login again")
    action.navigate('/login')
  }
}

export function* watchSaveNewCustomer() {
  yield takeEvery(SAVE_NEW_CUSTOMER, saveNewCustomer);
}
