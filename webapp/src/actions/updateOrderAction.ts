import * as types from './actionsTypes';

export type UpdateOrderActionType = {
  type: string;
  orderId: number;
  status: string;
  paymentType?: string;
  total?: number;
};

export const updateOrderAction = (
  orderId: number,
  status: string,
  paymentType?: string,
  total?: number
) => ({
  type: types.UPDATE_ORDER,
  orderId,
  status,
  paymentType,
  total,
});
