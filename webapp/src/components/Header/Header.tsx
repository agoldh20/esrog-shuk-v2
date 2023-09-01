import React, { FC } from 'react';
import EsrogImage from '../../assets/images/esrog.png';
import Optional from '../Optional/Optional';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { UserType } from '../../slices/userSlice/userSlice';
import { useNavigate } from 'react-router';
import { logoutAction } from '../../actions/logoutAction';

const Header: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, admin } = useSelector<RootState, UserType>(({ user }) => user);

  const handleLogout = () => {
    dispatch(logoutAction(navigate));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src={EsrogImage} width="35" height="35" className="d-inline-block align-top" alt="" />
      <span className="navbar-brand mb-0 h1">
        Esrog Shuk, hello {username || '... please login to continue'}!
      </span>
      <Optional renderIf={username}>
        (
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer', color: 'blue' }}
          onClick={handleLogout}>
          logout
        </span>
        )
      </Optional>
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
          <Optional renderIf={username}>
            <a className="nav-item nav-link" href="/">
              New Order
            </a>
          </Optional>
          <Optional renderIf={admin}>
            <a className="nav-link" href="/admin/open-orders">
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
