import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../actions/loginAction';
import { useNavigate } from 'react-router';

const LoginPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = ({ target }) => {
    setUsername(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleClick = () => {
    dispatch(loginAction(username, password, navigate));
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
        <button type="button" className="btn btn-primary" disabled={!username || !password} onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
