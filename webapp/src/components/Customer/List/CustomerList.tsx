import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CustomerListProps } from './CustomerListProps';
import './CustomerList.scss';
import { useDispatch } from 'react-redux';
import { CustomerType, setCustomer } from '../../../slices/customerSlice/customerSlice';

const CustomerList: FC<CustomerListProps> = ({ customerList, admin }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleClick = (customer: CustomerType) => {
    dispatch(setCustomer(customer));
    navigate(`/customer?id=${customer.id}`);
  };

  const rowColor = (year: number) => {
    if (admin) {
      const current = new Date().getFullYear();

      if (current - year === 1) {
        return 'table-warning';
      }
      if (current - year >= 2) {
        return 'table-danger';
      }
      if (current - year === 0) {
        return 'table-success';
      }
    }
  };

  return (
    <div className="container customer-list">
      <table className={`table table-hover ${admin ? '' : 'table-striped'}`}>
        <tbody>
          {customerList.map((c, index) => (
            <tr key={index} className={rowColor(c.lastPurchaseYear!)} onClick={() => handleClick(c)}>
              <td>{c.firstName}</td>
              <td>{c.lastName}</td>
              {admin && <td>{c.lastPurchaseYear}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
