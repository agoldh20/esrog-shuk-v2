import React, { FC, useEffect, useState } from 'react';
import { OpenOrdersListProps } from './OpenOrdersListProps';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';

const OpenOrdersList: FC<OpenOrdersListProps> = ({ customerId }) => {
  const dispatch = useDispatch();
  const naviate = useNavigate();
  const [openOrders, setOpenOrders] = useState<OrderType[]>([]);

  interface OrderType {
    id: number;
  }

  useEffect(() => {
    const openOrderIds = axios.get(`api/v1/orders/?customer_id=${customerId}`).then(({ data }) => {
      setOpenOrders(data);
    });
  }, []);

  const handleClick = orderId => {
    naviate(`/order?id=${orderId}`);
  };

  const orderList = () => {
    return openOrders.map(order => (
      <div
        key={`order-${order.id}`}
        style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}
        onClick={() => handleClick(order.id)}>
        Order {order.id}
      </div>
    ));
  };

  return <>{orderList()}</>;
};

export default OpenOrdersList;
