import React from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '..//Footer';
import Menu from '..//Menu';
import Header from '..//Header';

//import '../css/Table.scss'
import 'react-web-tabs/dist/react-web-tabs.css';
import { reactLocalStorage} from 'reactjs-localstorage';
class Clients extends React.Component{
  _isMounted;    
  constructor(props) {
      super(props);
      this._isMounted = false;    
        this.state = {
          expertID : '',
          clients : []
        };
        
      }
      componentDidMount() {
        this._isMounted = true;
        const requestOptions1 = {
          method: 'POST',
          headers : {
            Authorization : "Bearer " + reactLocalStorage.get("token"),
            'Content-Type': 'application/json'
          },
          body:  "\""+reactLocalStorage.get("password")+"\""
        }
        fetch('https://localhost:44334/api/Users/GetUserByName?username='+reactLocalStorage.get("username"),requestOptions1)
        .then(res => res.json())
        .then((data) => {
          if (this._isMounted){
           
          this.setState({expertID : data})
          const requestOptions2 = {
            method: 'POST',
            headers : {
              Authorization : "Bearer " + reactLocalStorage.get("token"),
              'Content-Type': 'application/json'
            },
            body : "\""+this.state.expertID+"\""      
          }
          fetch('https://localhost:44334/api/Investors/GetInvestorsByExpert',requestOptions2)
          .then(res => res.json())
          .then((data) => {if (this._isMounted){
            this.setState({clients : data})
          }})
          .catch(console.log)
          } 
          })
        .catch(console.log)
      
      }
      componentWillUnmount(){
        this._isMounted = false;
        
      }
    render(){
        return(
          <>
          <Header/>
          <Menu/>
          <div className="wrapper">            
            {/* Left side column. contains the logo and sidebar */}
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
            <section className="content-header">
                <h1>
                  Tables
                  <small>investors</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                  <li><a href="#">Tables</a></li>
                  <li className="active">Investors</li>
                </ol>
              </section>
          <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">List of investors</h3>
                      </div>
                    
            <div className="box-body">  
        <div className="box">
        <div className="box-header">
          <h3 className="box-title">List of investors</h3>
        </div>
        {/* /.box-header */}
        <div className="box-body">
          <table id="example2" className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>email</th>
                <th>time Horizon</th>
                <th>Birth</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
            {this.state.clients.map(function(item, key) {
                      return (
                          <tr key = {key}>
                              <td>{item.Investor_FullName}</td>
                              <td>{item.Investor_email}</td>
                              <td>{item.Investor_timeHorizon}</td>
                              <td>{item.Investor_birth}</td>
                              <td><FontAwesomeIcon icon={faIdBadge} color="rgb(221, 0, 48)" size="lg"/></td>
                          </tr>
                        )
                    })}
            </tbody>
            <tfoot>
              <tr>
              <th>Full Name</th>
                <th>email</th>
                <th>time Horizon</th>
                <th>Birth</th>
                <th>Profile</th>
              </tr>
            </tfoot>
          </table>
        </div>
        </div>
        </div> 
            </div>
            </div> 
            </div>
        <Footer/>
            </>
        );
    }
}
export default Clients;
