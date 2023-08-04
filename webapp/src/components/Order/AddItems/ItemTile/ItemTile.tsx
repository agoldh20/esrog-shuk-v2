import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ItemTileProps } from './ItemTileProps';
import { addLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';
import lineItemBuilder from '../../../../helpers/lineItemBuilder';

const ItemTile: FC<ItemTileProps> = ({ items, type, orderId }) => {
  const dispatch = useDispatch();

  const handleClick = item => {
    dispatch(addLineItem(lineItemBuilder(item, type)));
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">{type.charAt(0).toUpperCase() + type.slice(1)}</th>
        </tr>
      </thead>
      <tbody>
        {items.map((i, index) => (
          <tr key={index} onClick={() => handleClick(i)}>
            <td>{i.kind}</td>
            <td className="prices">${i.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemTile;
