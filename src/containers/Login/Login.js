import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import fakeAuth from '../../utils/auth';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>
        You must log in to view the page at
        {from.pathname}
      </p>
      <button type="button" onClick={login}>Log in</button>
    </div>
  );
};

export default Login;
