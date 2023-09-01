import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export type GetCustomerListActionType = {
  type: string;
  headers: any;
  navigate: NavigateFunction;
};

export const getCustomerListAction = (headers: any, navigate: NavigateFunction) => ({
  type: types.GET_CUSTOMER_LIST,
  headers,
  navigate
});
