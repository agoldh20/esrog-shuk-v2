import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EsrogTileProps } from './EsrogTileProps';
import { addLineItem } from '../../../../slices/lineItemsSlice/lineItemsSlice';

const EsrogTile: FC<EsrogTileProps> = ({ esrogs, grades }) => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState('');
  const [kind, setKind] = useState('');
  const [grade, setGrade] = useState('');

  // TODO build esrog line tiem
  const handleCLick = () => {
    dispatch(addLineItem({ itemType: 'esrog', name: kind, price, grade }));
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
            <select>
              {esrogs.map(e => (
                // @ts-ignore
                <option key={`esrog-${e.id}`} value={() => setKind(e.kind)}>
                  {e.kind}
                </option>
              ))}
            </select>
          </td>
          <td>
            <select>
              {grades.map(g => (
                // @ts-ignore
                <option key={`grade-${g.id}`} value={() => setGrade(g.grade)}>
                  {g.grade}
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
