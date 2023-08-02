import { Item } from '../slices/itemsSlice/itemsSlice';
import { LineItemType } from '../slices/lineItemsSlice/lineItemsSlice';

export default (item: Item, orderId: number, itemKind: string, gradeId?: number): LineItemType => {

  const lineItem: LineItemType = {
    lineId: Math.floor(Math.random() * 10000),
    orderId,
    lineTotal: +item.price!,
  }

  lineItem[`${itemKind}Id`] = item.id;

  if (gradeId) {
    lineItem.gradeId = gradeId;
  }

  return lineItem;
}
