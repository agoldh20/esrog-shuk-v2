import * as types from './actionsTypes';

export type UpdateOrderActionType = {
  type: string;
  orderId: number;
  status: string;
  paymentType?: string;
  total?: number;
  headers: any
};

export const updateOrderAction = (
  orderId: number,
  status: string,
  headers: any,
  paymentType?: string,
  total?: number,
) => ({
  type: types.UPDATE_ORDER,
  orderId,
  status,
  headers,
  paymentType,
  total,
});
