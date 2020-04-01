import React from 'react';
import { fakeAuth } from '../../utils/auth'
import { useLocation, useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticate(() => {
          history.replace(from);
        });
      };

    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log in</button>
        </div>
    )
}

export default Login