import React, { FC } from 'react';
import { useNavigate } from "react-router";
import { CustomerListProps } from './CustomerListProps';
import './CustomerList.scss';

const CustomerList: FC<CustomerListProps> = ({customerList}) => {

  const navigate = useNavigate();

  // TODO: create onClick
  // const openCustomer = (id: number) => navigate(`/customer/${ id }`);

  return (
    <div className="container customer-list">
      <table className="table table-hover table-striped ">
        <tbody>
        {
          customerList.map((c, index) => (
            <tr key={index}  >
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
