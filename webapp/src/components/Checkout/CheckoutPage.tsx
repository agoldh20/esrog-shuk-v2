import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutCart from './CheckoutCart/CheckoutCart';
import CustomerInfo from '../Customer/CustomerShow/CustomerInfo/CustomerInfo';
import { RootState } from '../../app/store';
import { CustomerType } from '../../slices/customerSlice/customerSlice';
import { OrderType } from '../../slices/orderSlice/orderSlice';
import NoteTile from './Note/NoteTile';
import PaymentTypeTile from '././PaymentType/PaymentTypeTile';
import VoucherTile from './Voucher/VoucherTile';

const CheckoutPage: FC = () => {
  const dispatch = useDispatch();
  const customer = useSelector<RootState, CustomerType>(({ customer }) => customer);
  const order = useSelector<RootState, OrderType>(({ order }) => order);

  return (
    <div className="checkout-page">
      <CustomerInfo customer={customer} />
      <br />
      <b>Order {order.id}</b>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <CheckoutCart order={order} />
          </div>
          <div className="col">
            <NoteTile status={order.status!} />
            <br />
            <VoucherTile status={order.status!}/>
            <br />
            <br />
            <PaymentTypeTile order={order} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
