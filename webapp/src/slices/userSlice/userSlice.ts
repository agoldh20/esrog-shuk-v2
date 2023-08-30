import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserType {
  id?: number;
  username?: string;
  admin?: boolean;
  jwt?: any;
}

export const initialState: UserType = {};

export const userSlice = createSlice({
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

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
