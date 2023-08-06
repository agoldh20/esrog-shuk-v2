import React, { FC } from 'react';
import { AddItemsProps } from './AddItemsProps';
import './AddItems.scss';
import EsrogTile from './EsrogTile/EsrogTile';
import ItemTile from './ItemTile/ItemTile';

const AddItems: FC<AddItemsProps> = ({ orderId, items }) => {
  const { esrogs, extras, grades, lulavs, hadasims, aravots } = items;

  return (
    <div className="add-items">
      <EsrogTile items={esrogs} orderId={orderId} grades={grades} type="esrogs" />
      <ItemTile items={lulavs} orderId={orderId} type="lulav" />
      <ItemTile items={hadasims} orderId={orderId} type="hadasim" />
      <ItemTile items={aravots} orderId={orderId} type="aravot" />
      <ItemTile items={extras} orderId={orderId} type="extra" />
    </div>
  );
};

export default AddItems;
