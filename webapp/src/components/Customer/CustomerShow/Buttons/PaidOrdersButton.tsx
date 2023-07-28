import { FC } from 'react';
import { ButtonProps } from './ButtonProps';

const PaidOrdersButton: FC<ButtonProps> = ({ customerId }) => {
  const handleClick = () => {
    // TODO
    console.log('=============>', `paid orders for customer ${customerId}`);
  };

  return (
    <button type="button" onClick={handleClick}>
      Show Paid Orders
    </button>
  );
};

export default PaidOrdersButton;
