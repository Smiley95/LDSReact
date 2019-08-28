import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';
import { PropTypes } from "prop-types";
import Login from "../views/Login";
import {  BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
class Menu extends React.Component{
  constructor(props) {
    super(props);
  }  
  toggleSidebar = () => {
    
  };
      render(){
        return(
            <React.Fragment>
                <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>{reactLocalStorage.get('username')}</p>
            </div>
          </div>
          {/* search form */}
          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
            <input type="text" name="q" className="form-control" placeholder="Search" />
              <span className="input-group-btn">
                <button type="submit" name="search" id="search-btn" className="btn btn-flat searchbtn" >
                  <i className="fa fa-search" />
                </button>
              </span>
            </div>
          </form>
          {/* /.search form */}
          {/* sidebar menu: : style can be found in sidebar.less */}
          <Router>
          <ul className="sidebar-menu" data-widget="tree">
            <li className="active treeview menu-open">
              <NavLink to="/dashboard">
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
              </NavLink>
            </li>
            <li >
              <NavLink to="/login" ><i className="fa fa-users" /> <span>Clients</span></NavLink>    
            </li>
            <li >
              <a href="#">
                <i className="fa fa-th-list" />
                <span>Portfolios</span>
              </a>
            </li>
            <li >
              <NavLink className="nav-link" activeClassName="active" to="/login" onClick={this.toggleSidebar}>
                <i className="fa fa-share" /> <span>Logout</span>
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
export default Menu;

Menu.defaultProps = {
  rtlActive: false,
  bgColor: "primary",
  routes: [{}]
};