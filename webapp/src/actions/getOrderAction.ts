import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export type GetOrderAction = {
  type: string;
  navigate: NavigateFunction;
  orderId: number;
  headers: any
};

export const getOrderAction = (
  orderId: number,
  navigate,
  headers,
) => ({
  type: types.GET_ORDER,
  orderId,
  navigate,
  headers,
});
