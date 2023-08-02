import { Item } from '../../../../slices/itemsSlice/itemsSlice';

export interface ItemTileProps {
  items: Item[];
  type: string;
  orderId: number;
  grades?: Item[];
}
