import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Landing from '../Landing';
import Login from '../Login';
import SignUp from '../SignUp';
import ForgotPassword from '../ForgotPassword';
import Home from '../Home';
import PrivateRoute from '../../components/PrivateRoute';
import NoMatch from '../../components/NoMatch';
import UserProvider from '../../components/UserProvider';
import 'antd/dist/antd.css';

const App = () => (
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/home"
          element={(
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          )}
        />
        {/* Using path="*"" means "match anything", so this route
          acts like a catch-all for URLs that we don't have explicit
          routes for. */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  </UserProvider>
);

export default App;
