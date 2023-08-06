import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { removeLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';
import { CheckoutLineItemsProps } from './CheckoutLineItemsProps';

const CheckoutLineItemTile: FC<CheckoutLineItemsProps> = ({ items, type, cartedItems }) => {
  const dispatch = useDispatch();
  const itemTitle = type.charAt(0).toUpperCase() + type.slice(1);

  const cartItems = cartedItems.map(ci => {
    return {
      lineId: ci.lineId,
      lineTotal: ci.lineTotal,
      kind: items.find(item => item.id === ci[`${type}Id`])?.kind,
    };
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
              <th scope="col">{itemTitle}</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem, index) => (
              <tr key={`${cartItem}-${index}`}>
                <td>{cartItem?.kind}</td>
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
