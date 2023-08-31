import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';

export type StartNewOrderActionType = {
  type: string;
  navigate: NavigateFunction;
  customerId: number;
  userId: number;
  headers: any;
};

export const startNewOrderAction = (navigate: NavigateFunction, customerId: number, userId: number, headers: any) => ({
  type: types.START_NEW_ORDER,
  navigate,
  customerId,
  userId,
  headers
});
