import { useJwtHeaders } from '../../../hooks/useJwtHeaders';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import Optional from '../../Optional/Optional';
import { OrderType } from '../../../slices/orderSlice/orderSlice';
import axios from 'axios';
import { getOrderAction } from '../../../actions/getOrderAction';
import { useNavigate } from 'react-router';
import './AdminOpenOrderPage.scss'
import { setCustomer } from '../../../slices/customerSlice/customerSlice';
import camelcaseKeys from 'camelcase-keys';

interface AdminOrderType extends OrderType {
  customer: any;
}

const AdminOpenOrdersPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headers = useJwtHeaders();
  const admin = useSelector<RootState, boolean>(({ user }) => user.admin!);
  const [openOrders, setOpenOrders] = useState<AdminOrderType[]>([]);

  useEffect(() => {
    axios.get('/api/v1/admin/open-orders', headers).then(({ data }) => {
      setOpenOrders(data)
    });
  }, []);

  const handleClick = (orderId, customer) => {
    dispatch(setCustomer(camelcaseKeys(customer)))
    dispatch(getOrderAction(orderId, navigate, headers));
  };

  return (
    <div className="admin-order-page">
      <Optional renderIf={admin}>
        <table className="table table-hover table-striped">
          <tbody>
            {openOrders.map((order, index) => (
              <tr key={index} onClick={() => handleClick(order.id, order.customer)}>
                <td>{order.customer.first_name}</td>
                <td>{order.customer.last_name}</td>
                <td>Order {order.id}</td>
                <td>${order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Optional>
      <Optional renderIf={!admin}>
        <b>YOU MUST BE AN ADMIN TO VIEW THIS PAGE</b>
      </Optional>
    </div>
  );
};

export default AdminOpenOrdersPage;
