import React, { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import { useNavigate } from 'react-router';

const PaidOrdersButton: FC<ButtonProps> = ({ customerId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/paid-orders')
  };

  return (
    <button type="button" onClick={handleClick}>
      Show Paid Orders
    </button>
  );
};

export default PaidOrdersButton;
