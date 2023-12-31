import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export type SaveNewCustomerActionType = {
  type: string;
  navigate: NavigateFunction;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  headers: any
};

export const saveNewCustomerAction = (
  navigate: NavigateFunction,
  firstName: string,
  lastName: string,
  phoneNumber: string,
  email: string,
  headers: any,
) => ({
  type: types.SAVE_NEW_CUSTOMER,
  navigate,
  firstName,
  lastName,
  phoneNumber,
  email,
  headers
});
