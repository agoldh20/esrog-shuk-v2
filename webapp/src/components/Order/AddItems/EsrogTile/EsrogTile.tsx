import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EsrogTileProps } from './EsrogTileProps';
import { addLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';
import lineItemBuilder from '../../../../helpers/lineItemBuilder';
import { Item } from '../../../../slices/itemsSlice/itemsSlice';
import { ItemTileProps } from '../ItemTile/ItemTileProps';

const EsrogTile: FC<ItemTileProps> = ({ items, grades, orderId }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [kind, setKind] = useState({} as Item);
  const [grade, setGrade] = useState({} as Item);

  // TODO figure out how to set without ts-ignore

  const handleCLick = () => {
    dispatch(addLineItem(lineItemBuilder({price, id: kind.id}, orderId, 'esrog', grade)));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Esrog</th>
          <th scope="col">Grade</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <select onChange={handleKind}>
              {items.map(esrog => (
                // @ts-ignore
                <option key={`esrog-${esrog.id}`} value={esrog}>
                  {esrog.kind}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select onChange={handleGrade}>
              {grades!.map(grade => (
                // @ts-ignore
                <option key={`grade-${grade.id}`} value={grade}>
                  {grade.grade}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input
              type="text"
              placeholder="Price"
              style={{ width: '64px' }}
              maxLength={3}
              value={price}
              onChange={e => setPrice(e.target.value.replace(/[^0-9]/, ''))}
            />
          </td>
          <td>
            <button type="button" className="btn btn-success" onClick={handleCLick}>
              Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EsrogTile;
