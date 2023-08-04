import { FC } from 'react';
import './PaymentTypeTile.scss'
import { useDispatch } from 'react-redux';
import { setPaymentType } from '../../../slices/orderSlice/orderSlice';
import { PaymentTypeTileProps } from './PaymentTypeTileProps';

const PaymentTypeTile: FC<PaymentTypeTileProps> = ({ order }) => {
  const dispatch = useDispatch();
  const { paymentType } = order;

  const handlePaymentType = (event) => {
    dispatch(setPaymentType(event.target.value))
  }

  return (
    <div className="payment-type pull-left" onChange={ handlePaymentType }>
      <label className="pull-left"><b>Payment Type</b></label>
      <br/>
      <input className="payment-radio-button" type="radio" value="Cash" checked={ paymentType === 'Cash' }/> Cash
      <input className="payment-radio-button" type="radio" value="Check" checked={ paymentType === 'Check' }/> Check
      <input className="payment-radio-button" type="radio" value="Quick Pay"
             checked={ paymentType === 'Quick Pay' }/> Quick Pay
      <input className="payment-radio-button" type="radio" value="Other" checked={ paymentType === 'Other' }/> Other
    </div>
  )
}

export default PaymentTypeTile;
