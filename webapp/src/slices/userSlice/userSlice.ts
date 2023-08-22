import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserType {
  id?: number;
  userName?: string;
  admin?: boolean;
}

export const initialState: UserType = {};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setUser: (state: UserType, action: PayloadAction<UserType>) => ({
      ...state,
      ...action.payload,
    }),
    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = orderSlice.actions;

export default orderSlice.reducer;
