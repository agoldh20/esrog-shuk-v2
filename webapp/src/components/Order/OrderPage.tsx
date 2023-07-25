import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableItemsAction } from '../../actions/getAvailableItemsAction';
import { RootState } from '../../app/store';
import { CustomerType } from '../../slices/customerSlice/customerSlice';
import CustomerInfo from '../Customer/CustomerShow/CustomerInfo/CustomerInfo';
import AddItems from './AddItems/AddItems';
import Cart from './Cart/Cart';

const OrderPage: FC = () => {
  const dispatch = useDispatch();
  const customer = useSelector<RootState, CustomerType>(state => state.customer);
  const orderId = useSelector<RootState, number>(state => state.order.id!);

  useEffect(() => {
    dispatch(getAvailableItemsAction())
  }, [])

  return (
    <div className="order-page">
      <CustomerInfo customer={customer} />
      <br/>
      <b>Order { orderId }</b>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col">
            <AddItems orderId={ orderId }/>
          </div>
          <div className="col">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;
