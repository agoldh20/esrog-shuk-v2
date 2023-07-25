import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface OrderType {
  id?: number;
  customerId?: number;
  userId?: number;
  status?: string;
  vouvherId?: number;
  total?: number
}

export const initialState: OrderType = {};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state: OrderType, action: PayloadAction<OrderType>) => ({
      ...state,
      ...action.payload
    }),
    resetOrder: () => initialState,
  },
});

export const { setOrder, resetOrder } = orderSlice.actions

export default orderSlice.reducer;
