import React, { FC } from 'react';
import { useNavigate } from "react-router";
import { CustomerListProps } from './CustomerListProps';
import './CustomerList.scss';
import { useDispatch } from 'react-redux';
import { CustomerType, setCustomer } from '../../../slices/customerSlice/customerSlice';

const CustomerList: FC<CustomerListProps> = ({customerList}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (customer: CustomerType) => {
    dispatch(setCustomer(customer))
    navigate(`/customer?id=${customer.id}`)
  }

  return (
    <div className="container customer-list">
      <table className="table table-hover table-striped ">
        <tbody>
        {
          customerList.map((c, index) => (
            <tr key={index}  onClick={ () => handleClick(c) }>
              <td>{ c.firstName }</td>
              <td>{ c.lastName }</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  )
}

export default CustomerList;
