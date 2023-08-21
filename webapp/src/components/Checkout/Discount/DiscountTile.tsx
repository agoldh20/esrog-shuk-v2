import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { DiscountProps } from './DiscountProps';
import axios from 'axios';
import { resetDiscount, resetVoucher, updateOrderDiscount } from '../../../slices/orderSlice/orderSlice';

const DiscountTile: FC<DiscountProps> = ({ order }) => {
  const dispatch = useDispatch();
  const [discountChecked, setDiscountChecked] = useState<boolean>(!!order.discount?.id);
  const [amount, setAmount] = useState(order.discount?.amount || '');

  useEffect(() => {
    if (order.discount?.id && !discountChecked) {
      axios.delete(`/api/v1/discounts/${order.discount.id}`).then(() => {
        dispatch(resetDiscount());
        setAmount('');
      });
    }
  }, [discountChecked, order.discount]);

  const handleDiscount = event => {
    setDiscountChecked(event.target.checked);
    if (event.target.checked) {
      setAmount('');
    }
  };

  const handleAmount = event => {
    setAmount(event.target.value.replace(/[^0-9]/, ''));
  };

  const addVoucher = () => {
    axios
      .post(`/api/v1/discounts`, {
        order_id: order.id,
        amount,
      })
      .then(response => dispatch(updateOrderDiscount(response.data)));
  };

  return (
    <div className="discount-tile pull-left">
      <input
        type="checkbox"
        checked={discountChecked}
        onChange={handleDiscount}
        disabled={order.status === 'paid'}
      />{' '}
      Discount &nbsp;
      {discountChecked && (
        <>
          <input
            type="text"
            onChange={handleAmount}
            placeholder="$"
            style={{ width: '64px', height: '23px', marginLeft: '8px' }}
            maxLength={3}
            value={amount}
            disabled={order.status === 'paid'}
          />
          <button
            className="btn btn-warning"
            style={{ marginLeft: '8px' }}
            onClick={addVoucher}
            disabled={!amount || order.status === 'paid'}>
            Apply Discount
          </button>
        </>
      )}
    </div>
  );
};

export default DiscountTile;
