import * as types from './actionsTypes';

export type CompleteOrderActionType = {
  type: string;
  orderId: number,
  status: string,
};

export const completeOrderAction = (orderId: number, status: string) => ({
  type: types.COMPLETE_ORDER,
  orderId,
  status,
});
