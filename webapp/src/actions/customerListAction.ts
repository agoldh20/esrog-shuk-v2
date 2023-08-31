import * as types from './actionsTypes';

export type GetCustomerListActionType = {
  type: string;
  headers: any;
};

export const getCustomerListAction = (headers: any) => ({
  type: types.GET_CUSTOMER_LIST,
  headers,
});
