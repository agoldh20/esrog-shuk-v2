import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import CustomerListPage from './components/Customer/CustomerListPage';
import NewCustomerPage from './components/Customer/NewCustomer/NewCustomerPage';
import { useDispatch } from 'react-redux';
import { resetCustomerList } from './slices/customerListSlice/customerListSlice';
import { resetCustomer } from './slices/customerSlice/customerSlice';
import CustomerShowPage from './components/Customer/CustomerShow/CustomerShowPage';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  if ( pathname === '/' ) {
    dispatch(resetCustomerList());
    dispatch(resetCustomer())
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <CustomerListPage/> }/>
        <Route path="/new-customer" element={ <NewCustomerPage/> }/>
        <Route path="/customer" element={ <CustomerShowPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
