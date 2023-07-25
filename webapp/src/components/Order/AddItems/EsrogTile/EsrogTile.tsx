import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { EsrogTileProps } from './EsrogTileProps';

const EsrogTile: FC<EsrogTileProps> = ({ esrogs, grades }) => {
  const dispatch = useDispatch();

  const handleCLick = () => {
    console.log('=============>', 'esrog add click');
  }

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
            { esrogs.map(e => (
              <option key={ `esrog-${ e.id }` }>{ e.kind }</option>
            )) }
          </select>
        </td>
        <td>
          <select>
            { grades.map(g => (
              <option key={ `grade-${ g.id }` }>{ g.grade }</option>
            )) }
          </select>
        </td>
        <td>
          <input type="text" placeholder="Price" style={ { width: '64px'} } maxLength={ 3 }/>
        </td>
        <td>
          <button type="button" className="btn btn-success" onClick={ handleCLick }>Add</button>
        </td>
      </tr>
      </tbody>
    </table>
)
}

export default EsrogTile;
