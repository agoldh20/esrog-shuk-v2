import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  id?: number;
  kind?: string;
  pitum?: boolean;
  price?: string;
  grade?: string;
}

export interface ItemsType {
  esrogs: Item[];
  lulavs: Item[];
  aravots: Item[];
  hadasims: Item[];
  extras: Item[];
  grades: Item[];
}

export const initialState: ItemsType = {
  esrogs: [],
  lulavs: [],
  aravots: [],
  hadasims: [],
  extras: [],
  grades: [],
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state: ItemsType, action: PayloadAction<ItemsType>) => ({
      ...state,
      esrogs: action.payload.esrogs,
      lulavs: action.payload.lulavs,
      aravots: action.payload.aravots,
      hadasims: action.payload.hadasims,
      extras: action.payload.extras,
      grades: action.payload.grades,
    }),
    resetItems: () => initialState,
  },
});

export const { setItems, resetItems } = itemsSlice.actions;

export default itemsSlice.reducer;
