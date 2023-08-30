import { call, put, select, takeEvery } from '@redux-saga/core/effects';
import { SAVE_NEW_CUSTOMER } from '../actions/actionsTypes';
import { postDataWithHeaders } from '../httpClient';
import camelcaseKeys from 'camelcase-keys';
import { SaveNewCustomerActionType } from '../actions/newCustomerAction';
import { setCustomer } from '../slices/customerSlice/customerSlice';
import { getJwt, headers } from '../helpers/headerInfo';

export function* saveNewCustomer(action: SaveNewCustomerActionType): any {
  const jwt = yield select(getJwt);

  try {
    const request = yield call(postDataWithHeaders, '/api/v1/customers', headers(jwt), {
      first_name: action.firstName,
      last_name: action.lastName,
      phone_number: action.phoneNumber,
      email: action.email,
    });

    yield put(setCustomer(camelcaseKeys(request)));

    action.navigate(`/customer?id=${ request.id }`);
  } catch (e) {}
}

export function* watchSaveNewCustomer() {
  yield takeEvery(SAVE_NEW_CUSTOMER, saveNewCustomer);
}
