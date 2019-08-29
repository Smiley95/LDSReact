import React from 'react';
import { createBrowserHistory } from "history";
import {  Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Assets from './components/Assets/Assets';
import Clients from './components/Clients/Clients';
import Portfolios from './components/Portfolios/Portfolios';
const hist = createBrowserHistory();
function App() {
  return (

<Router history={hist}>
      <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
      <Route exact path="/Assets" render={props => <Assets {...props} />} />
      <Route exact path="/login" render={props => <Login  {...props} />} />
      <Route exact path="/Clients" render={props => <Clients  {...props} />} />
      <Route exact path="/Portfolios" render={props => <Portfolios {...props} />} />
      {/*<Redirect to="/login"/>*/}
  </Router>
  );
}

export default App;
