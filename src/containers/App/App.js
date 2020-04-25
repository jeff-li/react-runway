import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
      <Switch>
        {/* children elements as recommended method in react router v5 */}
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  </UserProvider>
);

export default App;
