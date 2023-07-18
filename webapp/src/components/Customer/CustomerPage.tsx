import React, { FC, useEffect, useState } from 'react';
import CustomerList from './List/CustomerList';
import { getCustomerListAction } from '../../actions/customerListAction';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { CustomerType } from '../../slices/types';

const CustomerPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customers = useSelector<RootState, CustomerType[]>(state => state.customers);
  const [ filter, setFilter ] = useState('')

  const handleChange = (event) => {
    setFilter(event.target.value);
  }

  const filteredCustomerList = () => {
    const re = new RegExp(filter, 'i')
    return filter === '' ? customers :
      customers.filter(customer => `${customer.firstName} ${customer.lastName}`.match(re) || customer.phoneNumber.match(re));
  }

  useEffect(() => {
    dispatch(getCustomerListAction(navigate));
  }, [])

  return (
    <div>
      <input type="text" placeholder="Search" value={ filter } onChange={ handleChange }/>
      <br/>
      <br/>
      { filteredCustomerList().length === 0 ?
        <button type="button" className="btn btn-success" onClick={() => navigate('/new-customer')}>Add New Customer</button>
        :
        <CustomerList customerList={ filteredCustomerList() }/>
      }
    </div>
  )
}

export default CustomerPage
