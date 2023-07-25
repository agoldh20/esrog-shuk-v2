import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { EsrogTileProps } from './EsrogTileProps';

const EsrogTile: FC<EsrogTileProps> = ({esrogs, grades}) => {
  const dispatch = useDispatch();

  const handleCLick = () => {
    console.log('=============>', 'esrog add click');
  }

  return (
    <div className="item-title">
      Esrogim
      <br/>
      <select>
        { esrogs.map(e => (
          <option key={`esrog-${e.id}`}>{ e.kind }</option>
        )) }
      </select>
      <select>
        { grades.map(g => (
          <option key={`grade-${g.id}`}>{ g.grade }</option>
        )) }
      </select>
      <input type="text" placeholder="Price" style={{width: '64px', marginRight: '8px'}} maxLength={3} />
      <button type="button" className="btn btn-success" onClick={ handleCLick }>Add</button>
    </div>
  )
}

export default EsrogTile;
