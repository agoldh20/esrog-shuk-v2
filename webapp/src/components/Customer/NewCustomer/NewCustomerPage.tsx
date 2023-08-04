import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './NewCustomer.scss';
import { useNavigate } from 'react-router';
import { saveNewCustomerAction } from '../../../actions/newCustomerAction';

const NewCustomerPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [disable, setDisable] = useState(true);

  useEffect(() => {
    setDisable(phoneNumber.length < 10);
  },[]);

  const handleClick = () => {
    dispatch(saveNewCustomerAction(navigate, firstName, lastName, phoneNumber, email));
  };

  return (
    <div className="new-customer-form">
      <div>
        <input
          className="form-input"
          type="text"
          placeholder="First Name"
          onChange={e => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <input
          className="form-input"
          type="text"
          placeholder="Last Name"
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <div>
        <input
          className="form-input"
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          maxLength={10}
          onChange={e => setPhoneNumber(e.target.value.replace(/[^0-9]/, ''))}
        />
        <div className="text-muted">* Required</div>
      </div>
      <div>
        <input
          className="form-input"
          type="text"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button
          type="button"
          disabled={disable}
          className="form-input btn btn-success"
          onClick={handleClick}>
          Save New Customer
        </button>
      </div>
    </div>
  );
};

export default NewCustomerPage;
