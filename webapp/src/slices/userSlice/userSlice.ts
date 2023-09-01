import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserType {
  id?: number;
  username?: string;
  admin?: boolean;
  jwt?: any;
  tokenExp?: number;
}

export const initialState: UserType = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: UserType, action: PayloadAction<UserType>) => ({
      ...state,
      ...action.payload,
      tokenExp: Date.now() + (24*60*60)
    }),
    resetUser: () => initialState,
  },
});

export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
