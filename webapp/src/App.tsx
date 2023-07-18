import React from 'react';
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom';
import './App.scss';
import CustomerPage from './components/Customer/CustomerPage';
import NewCustomerPage from './components/Customer/NewCustomer/NewCustomerPage';
import { useDispatch } from 'react-redux';
import { resetCustomerList } from './slices/customerListSlice/customerListSlice';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  if ( pathname === '/' ) {
    dispatch(resetCustomerList());
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <CustomerPage/> }/>
        <Route path="/new-customer" element={ <NewCustomerPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
