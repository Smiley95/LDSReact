import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
class Portfolios extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            portfolios : [],
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
          })
          .catch(console.log)
          })
        .catch(console.log)
      
      }
    render(){
        return(
            <div className="box-body">
            <Tabs
            defaultTab="one"
            onChange={(tabId) => { console.log(tabId) }}
            >
            <TabList >
            {this.state.clients.map(function(item, key) {
                      return (
                            <Tab tabFor={item.Investor_FullName}>{item.Investor_FullName}</Tab>
                        )
                    })}
            </TabList>
            {this.state.clients.map((item, key)=> {
                      const requestOptions = {
                        method: 'GET',
                        headers : {
                          Authorization : "Bearer " + reactLocalStorage.get("token"),
                          'Content-Type': 'application/json'
                        }      
                      }
                      fetch('https://localhost:44334/api/Portfolios/GetPortfoliosByInvestor?InvestorID='+item.Investor_ID,requestOptions)
                      .then(res => res.json())
                      .then((data) => {
                        console.log(data);
                        this.setState({portfolios : data})
                        console.log(data);
                      })
                      .catch(console.log)
                      return (
                        <TabPanel tabId={item.Investor_FullName}>
                        <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                            <th>Portfolio ID</th>
                            <th>Portfolio title</th>
                            <th>Created on</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.portfolios.map((item, key)=> {
                            return (
                            
                            <Tab tabFor={item.Investor_FullName}>{item.Investor_FullName}</Tab>
                        )
                    })}
                    </tbody>
                        <tfoot>
                            <tr>
                            <th>Portfolio ID</th>
                            <th>Portfolio title</th>
                            <th>Created on</th>
                            </tr>
                        </tfoot>
                        </table>
                        </div>
                        </TabPanel>            
                        )
                    })}
            
            <TabPanel tabId="one">
            <div className="box-body">
            <table id="example2" className="table table-bordered table-hover">
            <thead>
                <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 4.0
                </td>
                <td>Win 95+</td>
                <td> 4</td>
                <td>X</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 5.0
                </td>
                <td>Win 95+</td>
                <td>5</td>
                <td>C</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 5.5
                </td>
                <td>Win 95+</td>
                <td>5.5</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 6
                </td>
                <td>Win 98+</td>
                <td>6</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>AOL browser (AOL desktop)</td>
                <td>Win XP</td>
                <td>6</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Gecko</td>
                <td>Firefox 1.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.7</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Gecko</td>
                <td>Firefox 1.5</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
                </tr>
            </tfoot>
            </table>
            </div>
            </TabPanel>
            <TabPanel tabId="two">
            <div className="box-body">
            <table id="example2" className="table table-bordered table-hover">
            <thead>
                <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 4.0
                </td>
                <td>Win 95+</td>
                <td> 4</td>
                <td>X</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 5.0
                </td>
                <td>Win 95+</td>
                <td>5</td>
                <td>C</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 5.5
                </td>
                <td>Win 95+</td>
                <td>5.5</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 6
                </td>
                <td>Win 98+</td>
                <td>6</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>AOL browser (AOL desktop)</td>
                <td>Win XP</td>
                <td>6</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Gecko</td>
                <td>Firefox 1.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.7</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Gecko</td>
                <td>Firefox 1.5</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
                </tr>
            </tfoot>
            </table>
            </div>
            </TabPanel>
            <TabPanel tabId="three">
            <div className="box-body">
            <table id="example2" className="table table-bordered table-hover">
            <thead>
                <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 4.0
                </td>
                <td>Win 95+</td>
                <td> 4</td>
                <td>X</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 5.0
                </td>
                <td>Win 95+</td>
                <td>5</td>
                <td>C</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 5.5
                </td>
                <td>Win 95+</td>
                <td>5.5</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>Internet
                    Explorer 6
                </td>
                <td>Win 98+</td>
                <td>6</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Trident</td>
                <td>AOL browser (AOL desktop)</td>
                <td>Win XP</td>
                <td>6</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Gecko</td>
                <td>Firefox 1.0</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.7</td>
                <td>A</td>
                </tr>
                <tr>
                <td>Gecko</td>
                <td>Firefox 1.5</td>
                <td>Win 98+ / OSX.2+</td>
                <td>1.8</td>
                <td>A</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <th>Rendering engine</th>
                <th>Browser</th>
                <th>Platform(s)</th>
                <th>Engine version</th>
                <th>CSS grade</th>
                </tr>
            </tfoot>
            </table>
            </div>
            </TabPanel>
            </Tabs>
            </div>            
        );
    }
}
export default Portfolios
