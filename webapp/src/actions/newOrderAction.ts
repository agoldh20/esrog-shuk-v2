import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export type StartNewOrderActionType = {
  type: string;
  navigate: NavigateFunction;
  customerId: number;
  userId: number;
};

export const startNewOrderAction = (navigate: NavigateFunction, customerId: number, userId: number) => ({
  type: types.START_NEW_ORDER,
  navigate,
  customerId,
  userId,
});
