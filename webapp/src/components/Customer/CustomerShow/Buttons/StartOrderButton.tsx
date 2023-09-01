import React, { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import { useDispatch, useSelector } from 'react-redux';
import { startNewOrderAction } from '../../../../actions/newOrderAction';
import { useNavigate } from 'react-router';
import { useJwtHeaders } from '../../../../hooks/useJwtHeaders';
import { RootState } from '../../../../app/store';

const StartOrderButton: FC<ButtonProps> = ({ customerId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headers = useJwtHeaders();
  const userId = useSelector<RootState, number>(({user}) => user.id!)

  const handleClick = () => {
    dispatch(startNewOrderAction(navigate, customerId, userId, headers));
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
