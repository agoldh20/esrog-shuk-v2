import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Item } from '../itemsSlice/itemsSlice';

export interface LineItemType {
   orderId?: number
   lulavId?: number
   hadasimId?: number
   aravotId?: number
   esrogId?: number
   extraId?: number
   lineTotal?: number
   gradeId?: number
}

export const initialState: LineItemType[] = [];

export const lineItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addLineItem: (state: LineItemType[], action: PayloadAction<LineItemType>) => state.concat(action.payload),
    removeLineItem: () => {},
    resetLineItems: () => initialState,
  },
});

export const { addLineItem, removeLineItem, resetLineItems } = lineItemsSlice.actions;

export default lineItemsSlice.reducer;
