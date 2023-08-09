import { Item } from '../../../../slices/itemsSlice/itemsSlice';
import { LineItemType } from '../../../../slices/lineItemsSlice/lineItemsSlice';

export interface CheckoutLineItemsProps {
  type: string;
  items: Item[];
  cartedItems: LineItemType[];
  grades?: Item[]
}
