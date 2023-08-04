import React, { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import { useDispatch } from 'react-redux';
import { startNewOrderAction } from '../../../../actions/newOrderAction';
import { useNavigate } from 'react-router';

const StartOrderButton: FC<ButtonProps> = ({ customerId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(startNewOrderAction(navigate, customerId, 1));
  };

  return (
    <span className="buttons">
      <button type="button" className="btn btn-success" onClick={handleClick}>
        Start New Order
      </button>
    </span>
  );
};

export default StartOrderButton;
