import { useNavigate } from 'react-router';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderAction } from '../../../actions/getOrderAction';
import { RootState } from '../../../app/store';
import axios from 'axios';
import { CustomerType } from '../../../slices/customerSlice/customerSlice';
import { OrderType } from '../../../slices/orderSlice/orderSlice';

const PaidOrdersPage: FC = () => {
  const dispatch = useDispatch();
  const naviate = useNavigate();
  const { id, firstName, lastName } = useSelector<RootState, CustomerType>(({ customer }) => customer);
  const [paidOrders, setPaidOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    const openOrderIds = axios.get(`/api/v1/orders/?customer_id=${id}&status=paid`).then(({ data }) => {
      setPaidOrders(data);
    });
  }, [id]);

  const handleClick = orderId => {
    dispatch(getOrderAction(orderId, naviate));
  };

  return (
    <div className="container paid-orders-page">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              Paid Orders for {firstName} {lastName}
            </th>
          </tr>
        </thead>
        <tbody>
          {paidOrders.map((order, index) => (
            <tr key={`paid-order-${index}`}>
              <td
                key={`order-${order.id}`}
                style={{ cursor: 'pointer' }}
                onClick={() => handleClick(order.id)}>
                Order {order.id} - ${order.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaidOrdersPage;
