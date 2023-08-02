import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LineItemType {
  lineId?: number;
  orderId?: number;
  lulavId?: number;
  hadasimId?: number;
  aravotId?: number;
  esrogId?: number;
  extraId?: number;
  lineTotal?: number;
  gradeId?: number;
}

export const initialState: LineItemType[] = [];

export const lineItemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addLineItem: (state: LineItemType[], action: PayloadAction<LineItemType>) =>
      state.concat(action.payload),
    removeLineItem: (state: LineItemType[], action: PayloadAction<number>) =>
      state.filter(item => item.lineId !== action.payload),
    resetLineItems: () => initialState,
  },
});

export const { addLineItem, removeLineItem, resetLineItems } = lineItemsSlice.actions;

export default lineItemsSlice.reducer;
