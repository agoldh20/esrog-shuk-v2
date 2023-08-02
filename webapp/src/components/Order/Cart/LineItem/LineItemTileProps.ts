import { DefaultProps } from '../../../../global';
import { Item } from '../../../../slices/itemsSlice/itemsSlice';
import { LineItemType } from '../../../../slices/lineItemsSlice/lineItemsSlice';

export interface LineItemTileProps extends DefaultProps {
  type: string;
  items: Item[];
  cartedItems: LineItemType[];
}
