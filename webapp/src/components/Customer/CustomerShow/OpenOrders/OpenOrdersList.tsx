import { FC, useEffect, useState } from 'react';
import { OpenOrdersListProps } from './OpenOrdersListProps';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const OpenOrdersList: FC<OpenOrdersListProps> = ({ customerId }) => {
  const dispatch = useDispatch();
  const [openOrders, setOpenOrders] = useState<OrderType[]>([]);

  interface OrderType {
    id: number;
  }

  useEffect(() => {
    const openOrderIds = axios.get(`api/v1/orders/?customer_id=${customerId}`)
      .then(({ data }) => {
        setOpenOrders(data)
      })
  },[])

  const handleClick = (orderId) => {
    // TODO
    console.log('=============>', `open order: ${ orderId }`);
  }

  const orderList = () => {
    return openOrders.map(order => (
      <div style={{ textDecoration: 'underline',cursor:'pointer', color: 'blue'}} onClick={ () => handleClick(order.id) }>
        Order { order.id }
      </div>
    ))
  }

  return (
    <>
      { orderList() }
    </>
  )
}

export default OpenOrdersList
