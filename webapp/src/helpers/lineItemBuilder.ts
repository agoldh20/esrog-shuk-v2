import { Item } from '../slices/itemsSlice/itemsSlice';
import { LineItemType } from '../slices/lineItemsSlice/lineItemsSlice';

export default (item: Item, orderId: number): LineItemType => {

  const lineItem: LineItemType = {
    orderId,
    lineTotal: +item.price!,
  }

  return lineItem;

}
