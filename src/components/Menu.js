import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import { PropTypes } from "prop-types";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Login from "../views/Login";
import {  BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
class Menu extends React.Component{
  constructor(props) {
    //localStorage.clear();
    super(props);
    this.logout = this.logout.bind(this);
    this.dashboard = this.dashboard.bind(this);
    
  } 
  dashboard(){
    let path='/dashboard';
    this.props.history.push(path);
  }
  
  logout(){
    let path='/login';
    this.props.history.push(path);
    reactLocalStorage.clear();
  }
      render(){
        return(
            <React.Fragment>
                <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="dist/img/teacher.png" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>{reactLocalStorage.get('username')}</p>
            </div>
          </div>
          
          {/* sidebar menu: : style can be found in sidebar.less */}
          <Router>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="menu-open">
              <a href="/dashboard" onClick={this.dashboard}>
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
              </a>
            </li>
            <li className="menu-open">
              <a href="/Clients" ><i className="fa fa-users" /> <span>Investors</span></a>    
            </li>
            <li className="menu-open">
              <a href="/Portfolios">
                <i className="fa fa-th-list" />
                <span>Portfolios</span>
              </a>
            </li>
            <li >
              <NavLink className="menu-open" to="/login" onClick={this.logout}>
              <FontAwesomeIcon icon={faSignOutAlt} size="lg"/> <span>Logout</span>
              </NavLink>
            </li>
          </ul>        
          </Router>
          
        </section>
        {/* /.sidebar */}
      </aside>
            </React.Fragment>
        );
    }
}
export default withRouter(Menu);

Menu.defaultProps = {
  rtlActive: false,
  bgColor: "primary",
  routes: [{}]
};