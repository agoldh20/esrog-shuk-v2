import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ItemTileProps } from './ItemTileProps';
import { addLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';

const ItemTile: FC<ItemTileProps> = ({ items, type }) => {
  const dispatch = useDispatch();

  const handleClick = item => {
    dispatch(addLineItem(item));
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
