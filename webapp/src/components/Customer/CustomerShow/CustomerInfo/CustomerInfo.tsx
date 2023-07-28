import { FC } from 'react';
import { CustomerInfoProps } from './CustomerInfoProps';
import './CustomerInfo.scss';

const CustomerInfo: FC<CustomerInfoProps> = ({ customer }) => {
  const formatPhone = phoneNumber => phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');

  return (
    <div className="customer-info">
      <div className="name">{`${customer.firstName} ${customer.lastName}`}</div>
      <div>{formatPhone(customer.phoneNumber)}</div>
      <div>{customer.email}</div>
    </div>
  );
};

export default CustomerInfo;
