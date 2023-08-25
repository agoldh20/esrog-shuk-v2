import React, { FC } from 'react';
import EsrogImage from '../../assets/images/esrog.png';
import Optional from '../Optional/Optional';

const Header: FC = () => {

  const { username, admin } = {
    username: 'Adam',
    admin: true,
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={EsrogImage} width="35" height="35" className="d-inline-block align-top" alt="" />
      <span className="navbar-brand mb-0 h1">Esrog Shuk, hello {username}!</span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/">
            New Order
          </a>
          <Optional renderIf={admin}>
            <a className="nav-link" href="/admin/all-open">
              Open Orders
            </a>
            <a className="nav-link" href="/admin/daily-totals">
              Daily Totals
            </a>
            <a className="nav-link" href="/admin/customer-list">
              Master Customer List
            </a>
          </Optional>
        </div>
      </div>
    </nav>
  );
};

export default Header;
