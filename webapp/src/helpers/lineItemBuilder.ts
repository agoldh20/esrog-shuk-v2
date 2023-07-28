import { Item } from '../slices/itemsSlice/itemsSlice';
import { LineItemType } from '../slices/lineItemsSlice/lineItemsSlice';

export default (item: Item, orderId: number, itemKind: string, grade?: Item): LineItemType => {

  const lineItem: LineItemType = {
    orderId,
    lineTotal: +item.price!,
  }

  lineItem[`${itemKind}Id`] = item.id;

  if (grade) {
    lineItem.gradeId = grade?.id;
  }

  return lineItem;
}
