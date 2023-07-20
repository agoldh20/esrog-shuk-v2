import { FC } from 'react';
import { PaidOrdersButtonProps } from './PaidOrdersButtonProps';

const PaidOrdersButton: FC<PaidOrdersButtonProps> = ({ customerId }) => {
  const handleClick = () => {
    // TODO
    console.log('=============>', `paid orders for customer ${ customerId }`);
  }

  return (
    <button type="button" onClick={ handleClick }>Show Paid Orders</button>
  )
}

export default PaidOrdersButton;
