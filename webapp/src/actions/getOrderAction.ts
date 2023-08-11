import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export type GetOrderAction = {
  type: string;
  navigate: NavigateFunction;
  orderId: number;
};

export const getOrderAction = (
  orderId: number,
  navigate,
) => ({
  type: types.GET_ORDER,
  orderId,
  navigate,
});
