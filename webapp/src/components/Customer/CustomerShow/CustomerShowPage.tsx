import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { CustomerType } from '../../../slices/types';
import CustomerInfo from './CustomerInfo/CustomerInfo';
import StartOrderButton from './Buttons/StartOrderButton';
import EditCustomerButton from './Buttons/EditCustomerButton';
import './CustomerShowPage.scss'
import OpenOrdersList from './OpenOrders/OpenOrdersList';
import PaidOrdersButton from './Buttons/PaidOrdersButton';

const CustomerShowPage: FC = () => {
  const customer = useSelector<RootState, CustomerType>(state => state.customer);

  return (
    <div className="customer-show-page">
      <CustomerInfo customer={ customer }/>

      <div className="main-buttons-container">
        <StartOrderButton />
        <EditCustomerButton />
      </div>

      <div className="open-orders-container">
        <b>Open Orders:</b>
        <OpenOrdersList customerId={ customer.id! }/>
      </div>

      <div className="paid-orders-button-container">
        <PaidOrdersButton customerId={customer.id!} />
      </div>
    </div>
  )
}

export default CustomerShowPage;
