import { ItemsType } from '../../../slices/itemsSlice/itemsSlice';

export interface CartProps {
  orderId: number;
  items: ItemsType;
}
