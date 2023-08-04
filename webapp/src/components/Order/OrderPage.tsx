import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableItemsAction } from '../../actions/getAvailableItemsAction';
import { RootState } from '../../app/store';
import { CustomerType } from '../../slices/customerSlice/customerSlice';
import CustomerInfo from '../Customer/CustomerShow/CustomerInfo/CustomerInfo';
import AddItems from './AddItems/AddItems';
import Cart from './Cart/Cart';
import { ItemsType } from '../../slices/itemsSlice/itemsSlice';

const OrderPage: FC = () => {
  const dispatch = useDispatch();
  const customer = useSelector<RootState, CustomerType>(state => state.customer);
  const orderId = useSelector<RootState, number>(state => state.order.id!);
  const items = useSelector<RootState, ItemsType>(state => state.items);
  useEffect(() => {
    dispatch(getAvailableItemsAction());
  }, []);

  return (
    <div className="order-page">
      <CustomerInfo customer={customer} />
      <br />
      <b>Order {orderId}</b>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <AddItems orderId={orderId} items={items} />
          </div>
          <div className="col">
            <Cart orderId={orderId} items={items}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
