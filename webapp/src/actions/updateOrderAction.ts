import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export type UpdateOrderActionType = {
  type: string;
  orderId: number;
  status: string;
  headers: any;
  navigate: NavigateFunction;
  paymentType?: string;
  total?: number;
};

export const updateOrderAction = (
  orderId: number,
  status: string,
  headers: any,
  navigate: NavigateFunction,
  paymentType?: string,
  total?: number
) => ({
  type: types.UPDATE_ORDER,
  orderId,
  status,
  headers,
  navigate,
  paymentType,
  total,
});
