import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutCart from './CheckoutCart/CheckoutCart';
import CustomerInfo from '../Customer/CustomerShow/CustomerInfo/CustomerInfo';
import { RootState } from '../../app/store';
import { CustomerType } from '../../slices/customerSlice/customerSlice';
import { OrderType } from '../../slices/orderSlice/orderSlice';
import NoteTile from './Note/NoteTile';
import PaymentTypeTile from '././PaymentType/PaymentTypeTile';
import VoucherTile from './Voucher/VoucherTile';
import DiscountTile from './Discount/DiscountTile';
import { updateOrderAction } from '../../actions/updateOrderAction';
import { useJwtHeaders } from '../../hooks/useJwtHeaders';

const CheckoutPage: FC = () => {
  const dispatch = useDispatch();
  const headers = useJwtHeaders();
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
            <NoteTile order={order} headers={headers}/>
            <br />
            <br />
            <PaymentTypeTile order={order} />
            <br />
            <br />
            <br />
            <br />
            <VoucherTile order={order} headers={headers}/>
            <br />
            <br />
            <DiscountTile order={order} headers={headers}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
