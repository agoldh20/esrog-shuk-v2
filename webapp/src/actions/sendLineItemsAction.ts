import * as types from './actionsTypes';
import { NavigateFunction } from 'react-router';
import { LineItemType } from '../slices/lineItemsSlice/lineItemsSlice';

export type SendLineItemsActionType = {
  type: string;
  navigate: NavigateFunction;
  orderId: number;
  items: LineItemType[];
  headers: any;
};

export const sendLineItemsAction = (
  navigate: NavigateFunction,
  orderId: number,
  items: LineItemType[],
  headers: any
) => ({
  type: types.SEND_LINE_ITEMS,
  navigate,
  orderId,
  items,
  headers
});
