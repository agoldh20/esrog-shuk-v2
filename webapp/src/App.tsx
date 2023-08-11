import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import CustomerListPage from './components/Customer/CustomerListPage';
import NewCustomerPage from './components/Customer/NewCustomer/NewCustomerPage';
import { useDispatch } from 'react-redux';
import { resetCustomerList } from './slices/customerListSlice/customerListSlice';
import { resetCustomer } from './slices/customerSlice/customerSlice';
import CustomerShowPage from './components/Customer/CustomerShow/CustomerShowPage';
import OrderPage from './components/Order/OrderPage';
import { resetOrder } from './slices/orderSlice/orderSlice';
import { resetItems } from './slices/itemsSlice/itemsSlice';
import { resetLineItems } from './slices/lineItemsSlice/lineItemsSlice';
import CheckoutPage from './components/Checkout/CheckoutPage';
import Header from './components/Header/Header';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  if (pathname === '/') {
    dispatch(resetCustomerList());
    dispatch(resetCustomer());
    dispatch(resetOrder());
    dispatch(resetItems());
    dispatch(resetLineItems());
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <CustomerListPage/> }/>
        <Route path="/new-customer" element={ <NewCustomerPage/> }/>
        <Route path="/customer" element={ <CustomerShowPage/> }/>
        <Route path="/order" element={ <OrderPage/> }/>
        <Route path="/checkout" element={ <CheckoutPage/> }/>
      </Routes>
    </div>
  );
};

export default App;
