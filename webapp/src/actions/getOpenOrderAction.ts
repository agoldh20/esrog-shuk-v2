import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export type GetOpenOrderAction = {
  type: string;
  navigate: NavigateFunction;
  orderId: number;
};

export const getOpenOrderAction = (
  orderId: number,
  navigate,
) => ({
  type: types.GET_OPEN_ORDER,
  orderId,
  navigate,
});
