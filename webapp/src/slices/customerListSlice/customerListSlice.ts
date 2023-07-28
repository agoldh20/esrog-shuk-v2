import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CustomerType } from '../customerSlice/customerSlice';

export const initialState: CustomerType[] = [];

export const customerListSlice = createSlice({
  name: 'customerList',
  initialState,
  reducers: {
    setCustomerList: (state: CustomerType[], action: PayloadAction<CustomerType[]>) =>
      state.concat(action.payload),
    resetCustomerList: () => initialState,
  },
});

export const { setCustomerList, resetCustomerList } = customerListSlice.actions;

export default customerListSlice.reducer;
