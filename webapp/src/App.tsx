import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import CustomerPage from './components/Customer/CustomerPage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <CustomerPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
