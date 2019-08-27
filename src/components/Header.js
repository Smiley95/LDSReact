import React from 'react';
import '../css/Header.scss'
class Header extends React.Component{
      render(){
        return(
            <header className="main-header colorHeader">
            {/* Logo */}
            <a href="index2.html" className="logo">
              {/* mini logo for sidebar mini 50x50 pixels */}
              <span className="logo-mini"><img className="logoLineMini" alt="mini logo"/></span>
              {/* logo for regular state and mobile devices */}
              <span className="logo-lg"><img className="logoLine" alt="logo"/></span>
            </a>
            {/* Header Navbar: style can be found in header.less */}
            <nav className="navbar navbar-static-top">
              {/* Sidebar toggle button*/}
              <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
              </a>
              {/* Navbar Right Menu */}
              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">
                  
                  {/* User Account: style can be found in dropdown.less */}
                  <li className="dropdown user user-menu">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <img src="dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                      <span className="hidden-xs">Alexander Pierce</span>
                    </a>
                    <ul className="dropdown-menu">
                      {/* User image */}
                      <li className="user-header">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        <p className="userInfo">
                          Alexander Pierce - Invester
                          <small>User since Nov. 2012</small>
                        </p>
                      </li>
                      {/* Menu Footer*/}
                      <li className="user-footer">
                        <div className="pull-left">
                          <a href="#" className="btn btn-default btn-flat">Profile</a>
                        </div>
                        <div className="pull-right">
                          <a href="#" className="btn btn-default btn-flat">Sign out</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
        );
    }
}
export default Header;