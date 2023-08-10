import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { removeLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';
import { CheckoutLineItemsProps } from './CheckoutLineItemsProps';

interface CheckoutBuiltItemType {
  lineId?: number;
  kind?: string;
  lineTotal?: number;
  grade?: string;
}

const CheckoutLineItemTile: FC<CheckoutLineItemsProps> = ({ items, type, grades, cartedItems }) => {
  const dispatch = useDispatch();
  const itemTitle = type.charAt(0).toUpperCase() + type.slice(1);

  const cartItems = cartedItems.map(ci => {
    const builtItem = {} as CheckoutBuiltItemType;
    builtItem.lineId = ci.lineId;
    builtItem.lineTotal = ci.lineTotal;
    builtItem.kind = items.find(item => item.id === ci[`${type}Id`])?.kind;
    if (grades) {
      builtItem.grade = grades.find(grade => grade.id === ci.gradeId)?.grade;
    }

    return builtItem;
  });

  const hanldeDelete = (id: number) => {
    dispatch(removeLineItem(id));
  };

  return (
    <>
      {cartedItems.length ? (
        <table className="table table-sm">
          <thead>
            <tr key={itemTitle}>
              <th scope="col">{itemTitle} ({cartedItems.length})</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <tr key={`${cartItem}-${index}`}>
                <td>{cartItem?.kind} {cartItem?.grade && <>- {cartItem?.grade}</>}</td>
                <td className="prices">${cartItem?.lineTotal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <></>
      )}
    </>
  );
};

export default CheckoutLineItemTile;
