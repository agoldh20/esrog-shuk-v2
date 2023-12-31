import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import CustomerListPage from './components/Customer/CustomerListPage';
import NewCustomerPage from './components/Customer/NewCustomer/NewCustomerPage';
import { useDispatch, useSelector } from 'react-redux';
import { resetCustomerList } from './slices/customerListSlice/customerListSlice';
import { resetCustomer } from './slices/customerSlice/customerSlice';
import CustomerShowPage from './components/Customer/CustomerShow/CustomerShowPage';
import OrderPage from './components/Order/OrderPage';
import { resetOrder } from './slices/orderSlice/orderSlice';
import { resetItems } from './slices/itemsSlice/itemsSlice';
import { resetLineItems } from './slices/lineItemsSlice/lineItemsSlice';
import CheckoutPage from './components/Checkout/CheckoutPage';
import Header from './components/Header/Header';
import PaidOrdersPage from './components/Order/Paid/PaidOrdersPage';
import LoginPage from './components/Login/LoginPage';
import InitPage from './components/InitPage';
import AdminOpenOrdersPage from './components/Admin/OpenOrders/AdminOpenOrdersPage';
import DailyTotalsPage from './components/Admin/DailyTotals/DailyTotalsPage';
import { RootState } from './app/store';
import { UserType } from './slices/userSlice/userSlice';

const App = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  if (pathname === '/home') {
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
        <Route path="/" element={<InitPage />} />
        <Route path="/home" element={ <CustomerListPage/> }/>
        <Route path="/new-customer" element={ <NewCustomerPage/> }/>
        <Route path="/customer" element={ <CustomerShowPage/> }/>
        <Route path="/order" element={ <OrderPage/> }/>
        <Route path="/checkout" element={ <CheckoutPage/> }/>
        <Route path="/paid-orders" element={ <PaidOrdersPage/> }/>
        <Route path="/login" element={ <LoginPage/> }/>
        <Route path="/admin">
          <Route path="customer-list" element={ <CustomerListPage/> }/>
          <Route path="open-orders" element={ <AdminOpenOrdersPage /> }/>
          <Route path="daily-totals" element={ <DailyTotalsPage /> }/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
