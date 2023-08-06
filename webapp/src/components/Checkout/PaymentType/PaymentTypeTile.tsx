import { FC } from 'react';
import './PaymentTypeTile.scss';
import { useDispatch } from 'react-redux';
import { setPaymentType } from '../../../slices/orderSlice/orderSlice';
import { PaymentTypeTileProps } from './PaymentTypeTileProps';

const PaymentTypeTile: FC<PaymentTypeTileProps> = ({ order }) => {
  const dispatch = useDispatch();
  const { paymentType } = order;

  const handlePaymentType = event => {
    dispatch(setPaymentType(event.target.value));
  };

  return (
    <div className="payment-type pull-left" onChange={handlePaymentType}>
      <label className="pull-left">
        <b>Payment Type</b>
      </label>
      <br />
      <input
        className="payment-radio-button"
        type="radio"
        value="cash"
        checked={paymentType === 'cash'}
      />{' '}
      Cash
      <input
        className="payment-radio-button"
        type="radio"
        value="check"
        checked={paymentType === 'check'}
      />{' '}
      Check
      <input
        className="payment-radio-button"
        type="radio"
        value="quick pay"
        checked={paymentType === 'quick pay'}
      />{' '}
      Quick Pay
      <input
        className="payment-radio-button"
        type="radio"
        value="other"
        checked={paymentType === 'other'}
      />{' '}
      Other
    </div>
  );
};

export default PaymentTypeTile;
