import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddItemsProps } from './AddItemsProps';
import { RootState } from '../../../app/store';
import { ItemsType } from '../../../slices/itemsSlice/itemsSlice';
import './AddItems.scss';
import EsrogTile from './EsrogTile/EsrogTile';

const AddItems: FC<AddItemsProps> = ({ orderId }) => {
  const dispatch = useDispatch();
  const { esrogs, extras, grades, lulavs, hadasims, aravots } = useSelector<RootState, ItemsType>(state => state.items);

  const handleClick = (item) => {
    console.log('=============>', item);
  }

  return (
    <div className="add-items">
      <EsrogTile esrogs={ esrogs } grades={ grades }/>
    </div>
  )
}

export default AddItems
