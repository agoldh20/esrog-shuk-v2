import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { VoucherProps } from './VoucherProps';
import axios from 'axios';
import { resetVoucher, updateOrderVoucher } from '../../../slices/orderSlice/orderSlice';

const VoucherTile: FC<VoucherProps> = ({ order }) => {
  const dispatch = useDispatch();
  const [ voucherChecked, setVoucherChecked ] = useState<boolean>(!!order.voucher?.id);
  const [ provider, setProvider ] = useState(order.voucher?.provider);
  const [ amount, setAmount ] = useState(order.voucher?.amount);

  useEffect(() => {
    if (order.voucher?.id && !voucherChecked) {
      axios.delete(`/api/v1/vouchers/${ order.voucher.id }`).then(() => {
        dispatch(resetVoucher());
        setProvider(undefined);
        setAmount(undefined);
      });
    }
  }, [ voucherChecked, order.voucher ]);

  const handleVoucher = event => {
    setVoucherChecked(event.target.checked);
    if (event.target.checked) {
      setProvider(undefined);
      setAmount(undefined);
    }
  };

  const handleProivder = event => {
    setProvider(event.target.value);
  };

  const handleAmount = event => {
    setAmount(event.target.value.replace(/[^0-9]/, ''));
  };

  const addVoucher = () => {
    axios
      .post(`/api/v1/vouchers`, {
        order_id: order.id,
        provider,
        amount,
      })
      .then(response => dispatch(updateOrderVoucher(response.data)));
  };

  return (
    <div className="voucher-tile pull-left">
      <input
        type="checkbox"
        checked={ voucherChecked }
        onChange={ handleVoucher }
        disabled={ order.status === 'paid' }
      />{ ' ' }
      Voucher &nbsp;
      { voucherChecked && (
        <>
          <select onChange={ handleProivder } disabled={ order.status === 'paid' }
                  defaultValue={ order.voucher?.provider || 'none' }>
            <option value="none" hidden>
              Provider
            </option>
            <option key="YTT" value="YTT">
              YTT
            </option>
            <option key="Veitzner" value="Veitzner">
              Veitzner
            </option>
            <option key="Khal Chasidim Staff" value="Khal Chasidim Staff">
              Khal Chasidim
            </option>
            <option key="Esrog Fund" value="Esrog Fund">
              Esrog Fund
            </option>
          </select>
          <input
            type="text"
            onChange={ handleAmount }
            placeholder="$$"
            style={ { width: '64px', height: '23px', marginLeft: '8px' } }
            maxLength={ 3 }
            value={ amount }
            disabled={ order.status === 'paid' }
          />
          <button
            className="btn btn-warning"
            style={ { marginLeft: '8px' } }
            onClick={ addVoucher }
            disabled={ !provider || !amount || order.status === 'paid' }>
            Add
          </button>
        </>
      ) }
    </div>
  );
};

export default VoucherTile;
