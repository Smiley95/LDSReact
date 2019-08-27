import React from 'react';
import { createBrowserHistory } from "history";
import {  BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Dashboard from "./views/Dashboard";
const hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <Route exact path="/dashboard" render={props => <Dashboard {...props} />} />
      <Redirect to="/dashboard"/>
  </Router>
  );
}

export default App;
