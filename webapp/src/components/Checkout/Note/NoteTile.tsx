import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NoteProps } from './NoteProps';
import { NoteType, resetNote, updateOrderNote } from '../../../slices/orderSlice/orderSlice';

const NoteTile: FC<NoteProps> = ({ status }) => {
  const dispatch = useDispatch();
  const [note, setNote] = useState<string | null>();

  useEffect(() => {
    if (!note?.length) {
      dispatch(resetNote());
    }
  }, [note]);

  const handleOnChange = event => {
    setNote(event.target.value);
  };

  const handleClick = () => {
    dispatch(updateOrderNote({ note } as NoteType));
  };

  return (
    <div className="note-tile">
      <label className="pull-left">Notes</label>
      <textarea rows={4} cols={50} onChange={handleOnChange} disabled={status === 'paid'} />
      <button className="btn btn-secondary pull-right" disabled={status === 'paid'} onClick={handleClick}>
        Save Note
      </button>
    </div>
  );
};

export default NoteTile;
