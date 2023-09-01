import React, { FC, useEffect, useState } from 'react';
import { OpenOrdersListProps } from './OpenOrdersListProps';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { getOrderAction } from '../../../../actions/getOrderAction';
import { OrderType } from '../../../../slices/orderSlice/orderSlice';
import { useJwtHeaders } from '../../../../hooks/useJwtHeaders';

const OpenOrdersList: FC<OpenOrdersListProps> = ({ customerId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headers = useJwtHeaders();
  const [openOrders, setOpenOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    axios
      .get(`/api/v1/orders/?customer_id=${customerId}&status=open`, headers)
      .then(({ data }) => {
        setOpenOrders(data);
      });
  }, [customerId]);

  const handleClick = orderId => {
    dispatch(getOrderAction(orderId, navigate, headers));
  };

  const handleDelete = orderId => {
    axios.delete(`/api/v1/orders/${orderId}`, headers).then(() => {
      setOpenOrders(openOrders.filter(order => order.id !== orderId));
    });
  };

  return (
    <>
      {openOrders.map((order, index) => (
        <div key={`open-order-${index}`}>
          <span
            key={`order-${order.id}`}
            style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}
            onClick={() => handleClick(order.id)}>
            Order {order.id} - ${order.total || 0}
          </span>
          <i
            style={{ fontSize: '18px', cursor: 'pointer', marginLeft: '12px' }}
            className="fa"
            onClick={() => handleDelete(order.id)}>
            &#xf014;
          </i>
        </div>
      ))}
    </>
  );
};

export default OpenOrdersList;
