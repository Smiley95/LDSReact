import React from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
//import '../css/Table.scss'
import 'react-web-tabs/dist/react-web-tabs.css';
import {reactLocalStorage} from 'reactjs-localstorage';
class Clients extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
          username : reactLocalStorage.get("username"),
          password : reactLocalStorage.get("password"),
          expertID : '',
          clients : []
        };
      }
      componentDidMount() {
        
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
          .then((data) => {
            this.setState({clients : data})
            console.log(this.state.clients)
            reactLocalStorage.setObject("clients",this.state.clients);
          })
          .catch(console.log)
          })
        .catch(console.log)
      
      }
    render(){
        return(
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
              </tr>
            </tfoot>
          </table>
        </div>
        </div>);
    }
}
export default Clients;
