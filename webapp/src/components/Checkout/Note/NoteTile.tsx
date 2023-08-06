import { FC } from 'react';
import { useDispatch } from 'react-redux';

const NoteTile: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="note-tile">
        <label className="pull-left">Notes</label>
        <textarea rows={4} cols={50} />
      </div>
      <div className="voucher-tile"></div>
    </>
  );
};

export default NoteTile;
