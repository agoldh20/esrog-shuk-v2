import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OrderType {
  id?: number;
  customerId?: number;
  userId?: number;
  status?: string;
  voucherId?: number;
  paymentType?: string;
  total?: number;
}

export const initialState: OrderType = {};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state: OrderType, action: PayloadAction<OrderType>) => ({
      ...state,
      ...action.payload,
    }),
    setPaymentType: (state: OrderType, action: PayloadAction<string>) => ({
      ...state,
      paymentType: action.payload,
    }),
    updateOrderStatus: (state: OrderType, action: PayloadAction<string>) => ({
      ...state,
      status: action.payload,
    }),
    resetOrder: () => initialState,
  },
});

export const { setOrder, setPaymentType, updateOrderStatus, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;
