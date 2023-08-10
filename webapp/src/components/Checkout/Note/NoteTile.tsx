import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NoteProps } from './NoteProps';
import { resetNote, setOrder, updateOrderNote } from '../../../slices/orderSlice/orderSlice';
import axios from 'axios';

const NoteTile: FC<NoteProps> = ({ order }) => {
  const dispatch = useDispatch();
  const [ note, setNote ] = useState<string | null>(order.note?.note || null);

  useEffect(() => {
    if (order.note && !note?.length) {
      axios.delete(`api/v1/notes/${ order.note!.id }`).then(() => {
        dispatch(resetNote());
      }).then(() => setNote(''));
    }
  }, [ note ]);

  const handleOnChange = event => {
    setNote(event.target.value);
  };

  const handleClick = () => {
    axios
      .post(`api/v1/notes`, { note, order_id: order.id })
      .then(response => {
        dispatch(updateOrderNote(response.data));
      });
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
        disabled={ order.status === 'paid' || !note?.length }
        onClick={ handleClick }>
        Save Note
      </button>
    </div>
  );
};

export default NoteTile;
