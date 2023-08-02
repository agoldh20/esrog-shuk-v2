import { DefaultProps } from '../../../global';
import { Item, ItemsType } from '../../../slices/itemsSlice/itemsSlice';

export interface AddItemsProps extends DefaultProps {
  orderId: number;
  items: ItemsType;
}
