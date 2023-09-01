import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NoteProps } from './NoteProps';
import { NoteType, OrderType, resetNote, updateOrderNote } from '../../../slices/orderSlice/orderSlice';
import axios from 'axios';
import { useJwtHeaders } from '../../../hooks/useJwtHeaders';

const NoteTile: FC<NoteProps> = ({ order, headers }) => {
  const dispatch = useDispatch();
  const [ord, setOrd] = useState<OrderType>(order)
  const [ note, setNote ] = useState<string | null>(order.note?.note || '');

  const handleOnChange = event => {
    setNote(event.target.value);
  };

  const handleClick = () => {
    if (ord.note && !note?.length) {
      axios.delete(`/api/v1/notes/${ order.note!.id }`, headers).then(() => {
        dispatch(resetNote());
        setNote('');
        setOrd({...ord, note: undefined})
      });
    } else {
      axios
        .post(`/api/v1/notes`, { note, order_id: order.id }, headers)
        .then(response => {
          dispatch(updateOrderNote(response.data));
          setOrd({...ord, note: {} as NoteType})
        });
    }
  };

  return (
    <div className="note-tile">
      <label className="pull-left">Notes</label>
      <textarea
        rows={ 4 }
        cols={ 50 }
        onChange={ handleOnChange }
        disabled={ order.status === 'paid' }
        value={ note! }
      />
      <button
        className="btn btn-secondary pull-right"
        disabled={ order.status === 'paid' || (!note?.length && !ord.note) }
        onClick={ handleClick }>
        Save Note
      </button>
    </div>
  );
};

export default NoteTile;
