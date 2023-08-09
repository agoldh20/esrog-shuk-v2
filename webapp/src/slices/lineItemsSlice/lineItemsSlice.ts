import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LineItemType {
  lineId?: number;
  lulavId?: number;
  hadasimId?: number;
  aravotId?: number;
  esrogId?: number;
  extraId?: number;
  lineTotal?: number;
  gradeId?: number;
  orderId?: number;
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
    setOpenOrderLineItems: (state: LineItemType[], action: PayloadAction<LineItemType[]>) => ([
      ...state,
      ...action.payload
    ]),
    resetLineItems: () => initialState,
  },
});

export const { addLineItem, setOpenOrderLineItems, removeLineItem, resetLineItems } = lineItemsSlice.actions;

export default lineItemsSlice.reducer;
