import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CustomerType {
  id?: number;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
}

export const initialState: CustomerType = {};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setCustomer: (state: CustomerType, action: PayloadAction<CustomerType>) => ({
      ...state,
      ...action.payload,
    }),
    resetCustomer: () => initialState,
  },
});

export const { setCustomer, resetCustomer } = customerSlice.actions;

export default customerSlice.reducer;
