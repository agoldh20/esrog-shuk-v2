import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../actions/loginAction';

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = ({ target }) => {
    setUsername(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleClick = () => {
    dispatch(loginAction(username, password));
  };

  return (
    <div className="login-page">
      <div>
        <input type="text" placeholder="username" value={username} onChange={handleUsername} />
      </div>
      <div>
        <input type="text" placeholder="password" value={password} onChange={handlePassword}/>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
