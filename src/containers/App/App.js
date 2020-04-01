import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from '../Login'
import Home from '../Home'
import PrivateRoute from '../../components/PrivateRoute'
import './App.css';

const App = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <Button type="primary">Button</Button>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
  );
}

export default App;
