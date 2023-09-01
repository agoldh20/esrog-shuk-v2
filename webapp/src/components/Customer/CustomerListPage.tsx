import React, { FC, useEffect, useState } from 'react';
import CustomerList from './List/CustomerList';
import { getCustomerListAction } from '../../actions/customerListAction';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { CustomerType } from '../../slices/customerSlice/customerSlice';
import { useLocation } from 'react-router-dom';
import { useJwtHeaders } from '../../hooks/useJwtHeaders';
import Optional from '../Optional/Optional';

const CustomerListPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const headers = useJwtHeaders();
  const { pathname } = useLocation();
  const customerList = useSelector<RootState, CustomerType[]>(({ customerList }) => customerList);
  const [ filter, setFilter ] = useState('');
  const [ admin, setAdmin ] = useState(false);

  useEffect(() => {
    if (!customerList.length) {
      dispatch(getCustomerListAction(headers));
    }
  }, [ dispatch, customerList ]);

  useEffect(() => {
    setAdmin(pathname === '/admin/customer-list');
  }, [ pathname ]);

  const handleChange = event => {
    setFilter(event.target.value);
  };

  const filteredCustomerList = () => {
    const re = new RegExp(filter, 'i');
    return filter === ''
      ? customerList
      : customerList.filter(
        customer =>
          `${ customer.firstName } ${ customer.lastName }`.match(re) || customer.phoneNumber?.match(re),
      );
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={filter} onChange={handleChange} />
      <br />
      <br />
      { filteredCustomerList().length === 0 ? (
        <button type="button" className="btn btn-success" onClick={() => navigate('/new-customer')}>
          Add New Customer
        </button>
      ) : (
        <>
          <Optional renderIf={ pathname === '/admin/customer-list' }>
            Key -
            &emsp;
            <span style={{ backgroundColor: 'lightgreen'}}>{ new Date().getFullYear() }</span>
            &emsp;
            <span style={{ backgroundColor: 'lightyellow'}}>{ new Date().getFullYear() - 1 }</span>
            &emsp;
            <span style={{ backgroundColor: 'pink'}}>{ new Date().getFullYear() - 2 }+</span>
          </Optional>
          <CustomerList customerList={ filteredCustomerList() } admin={ admin } />
        </>
      )}
    </div>
  )
    ;
};

export default CustomerListPage;
