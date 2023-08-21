import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NoteType {
  id?: number;
  note?: string;
}

export interface VoucherType {
  id?: number;
  provider?: string;
  amount?: number;
}

export interface DiscountType {
  id?: number;
  amount?: number;
}

export interface OrderType {
  id?: number;
  customerId?: number;
  userId?: number;
  status?: string;
  paymentType?: string;
  note?: NoteType;
  voucher?: VoucherType;
  discount?: DiscountType;
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
    updateOrderNote: (state: OrderType, action: PayloadAction<NoteType>) => ({
      ...state,
      note: action.payload,
    }),
    updateOrderVoucher: (state: OrderType, action: PayloadAction<VoucherType>) => ({
      ...state,
      voucher: action.payload,
    }),
    updateOrderDiscount: (state: OrderType, action: PayloadAction<DiscountType>) => ({
      ...state,
      discount: action.payload,
    }),
    resetNote: (state: OrderType) => ({
      ...state,
      note: {},
    }),
    resetVoucher: (state: OrderType) => ({
      ...state,
      voucher: {},
    }),
    resetDiscount: (state: OrderType) => ({
      ...state,
      discount: {},
    }),
    resetOrder: () => initialState,
  },
});

export const {
  setOrder,
  setPaymentType,
  updateOrderStatus,
  updateOrderVoucher,
  updateOrderNote,
  updateOrderDiscount,
  resetOrder,
  resetNote,
  resetVoucher,
  resetDiscount,
} = orderSlice.actions;

export default orderSlice.reducer;
