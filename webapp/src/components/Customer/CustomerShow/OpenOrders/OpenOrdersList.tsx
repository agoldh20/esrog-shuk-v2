import { FC } from 'react';
import { findAllByDisplayValue } from '@testing-library/react';
import { OpenOrdersListProps } from './OpenOrdersListProps';

const OpenOrdersList: FC<OpenOrdersListProps> = ({ customerId }) => {
  const handleClick = (orderId) => {
    // TODO
    console.log('=============>', `open order: ${ orderId }`);
  }

  const mockOrders = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]

  const orderList = () => {
    return mockOrders.map(order => (
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
