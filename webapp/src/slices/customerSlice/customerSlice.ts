import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CustomerType } from "../types";

export const initialState: CustomerType = {};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state: CustomerType, action: PayloadAction<CustomerType>) => ({
      ...state,
      ...action.payload
    }),
    resetCustomer: () => initialState,
  },
});

export const { setCustomer, resetCustomer } = customerSlice.actions

export default customerSlice.reducer;
