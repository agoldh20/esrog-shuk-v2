import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CustomerType } from "../types";

export const initialState: CustomerType[] = [];

export const customerListSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    setCustomerList: (state: CustomerType[], action: PayloadAction<CustomerType[]>) => state.concat(action.payload),
  },
});

export const { setCustomerList } = customerListSlice.actions

export default customerListSlice.reducer;
