import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';
import lineItemBuilder from '../../../../helpers/lineItemBuilder';
import { ItemTileProps } from '../ItemTile/ItemTileProps';

const EsrogTile: FC<ItemTileProps> = ({ items, grades, orderId }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [kindId, setKindId] = useState('');
  const [gradeId, setGradeId] = useState('');

  const handleKindId = e => {
    setKindId(e.target.value);
  };

  const handleGradeId = e => {
    setGradeId(e.target.value);
  };

  const handleCLick = () => {
    dispatch(addLineItem(lineItemBuilder({ price, id: +kindId }, 'esrog', +gradeId)));
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
            <select onChange={handleKindId}>
              <option disabled selected>
                --
              </option>
              {items.map(esrog => (
                <option key={`esrog-${esrog.id}`} value={esrog.id}>
                  {esrog.kind}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select onChange={handleGradeId}>
              <option disabled selected>
                --
              </option>
              {grades!.map(grade => (
                <option key={`grade-${grade.id}`} value={grade.id}>
                  {grade.grade}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input
              type="text"
              placeholder="Price"
              style={{ width: '64px', height: '23px' }}
              maxLength={3}
              value={price}
              onChange={e => setPrice(e.target.value.replace(/[^0-9]/, ''))}
            />
          </td>
          <td>
            <button
              type="button"
              className="btn btn-success"
              onClick={handleCLick}
              disabled={!price || !gradeId || !kindId}>
              Add
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default EsrogTile;
