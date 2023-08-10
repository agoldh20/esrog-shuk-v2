import React, { FC, useEffect, useState } from 'react';
import { OpenOrdersListProps } from './OpenOrdersListProps';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { getOpenOrderAction } from '../../../../actions/getOpenOrderAction';

const OpenOrdersList: FC<OpenOrdersListProps> = ({ customerId }) => {
  const dispatch = useDispatch();
  const naviate = useNavigate();
  const [ openOrders, setOpenOrders ] = useState<OrderType[]>([]);

  interface OrderType {
    id: number;
  }

  useEffect(() => {
    const openOrderIds = axios.get(`api/v1/orders/?customer_id=${ customerId }`).then(({ data }) => {
      setOpenOrders(data);
    });
  }, [ customerId ]);

  const handleClick = orderId => {
    dispatch(getOpenOrderAction(orderId, naviate))
  };

  const handleDelete = orderId => {
    axios.delete(`/api/v1/orders/${ orderId }`).then(() => {
      setOpenOrders(openOrders.filter(order => order.id !== orderId));
    });
  };

  return (
    <>
      {
        openOrders.map((order, index) => (
          <div key={`open-order-${index}`}>
            <span
              key={ `order-${ order.id }` }
              style={ { textDecoration: 'underline', cursor: 'pointer', color: 'blue' } }
              onClick={ () => handleClick(order.id) }>
              Order { order.id }
            </span>
            <i
              style={ { fontSize: '18px', cursor: 'pointer', marginLeft: '12px' } }
              className="fa"
              onClick={ () => handleDelete(order.id) }>
              &#xf014;
            </i>
          </div>
        ))
      }
    </>
  )
};

export default OpenOrdersList;
