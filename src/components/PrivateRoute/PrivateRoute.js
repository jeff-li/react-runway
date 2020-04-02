import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import fakeAuth from '../../utils/auth';

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) => (fakeAuth.isAuthenticated ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      ))}
    />
  );
}

export default PrivateRoute;
