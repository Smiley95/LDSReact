import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Portfolios extends React.Component{
  _isMounted;    
  constructor(props) {      
    super(props);
        this.state = {
            portfolios : [],
          username : reactLocalStorage.get('username') ,
          password : reactLocalStorage.get("password"),
          expertID : '',
          clients : [],
        };
        this._isMounted = false;
        console.log(reactLocalStorage.get("username") + " password "+ reactLocalStorage.get("password"));
      }
      componentDidMount() {
        //console.log("mount" + Date.now());
        this._isMounted = true;
        const requestOptions1 = {
          method: 'POST',
          headers : {
            Authorization : "Bearer " + reactLocalStorage.get("token"),
            'Content-Type': 'application/json'
          },
          body:  "\""+reactLocalStorage.get("password")+"\""
        }
        
        fetch('https://localhost:44334/api/Users/GetUserByName?username='+this.state.username,requestOptions1)
        .then(res => res.json())
        .then((data) => {if(this._isMounted){
          //console.log("mount" + Date.now());
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
          .then((data) => {if(this._isMounted){
            this.setState({clients : data})
          }
          })
          .catch(console.log)
        }
          })
        .catch(console.log)
      }
      componentWillUnmount(){
        this._isMounted = false;
        //console.log("unmount" + Date.now());
      }
    render(){
        return(
            <div className="box-body">
            <Tabs
            selected={"0"}
            onChange={(tabId) => { console.log(tabId) }}
            >
            <TabList >
            {this.state.clients.map(function(item, key) {
                      return (
                            <Tab tabFor={"\""+key+"\""}>{item.Investor_FullName}</Tab>
                        )
                    })}
            </TabList>
            {this.state.clients.map((item, key)=> {
                      var portfolios = this.state.clients[key].Portfolio;
                      console.log(portfolios);
                      return (
                        <TabPanel tabId={"\""+key+"\""}>
                        <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                        <thead>
                            <tr>
                            <th>Portfolio ID</th>
                            <th>Portfolio title</th>
                            <th>Created on</th>
                            <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolios.map((item,key) => {
                                console.log(item);
                                return(
                                    <tr>
                                <td>{item.Portfolio_ID}</td>
                                <td>{item.Portfolio_title}</td>
                                <td>{item.Portfolio_creationDate}</td>
                                <th><a><FontAwesomeIcon icon={faFolderOpen} color="rgb(221, 0, 48)" size="lg"/></a></th>
                                </tr>
                                );
                            })
                            }
                    </tbody>
                        <tfoot>
                            <tr>
                            <th>Portfolio ID</th>
                            <th>Portfolio title</th>
                            <th>Created on</th>
                            <th>Details</th>
                            </tr>
                        </tfoot>
                        </table>
                        </div>
                        </TabPanel>            
                        )
                    })}
            
            </Tabs>
            </div>            
        );
    }
}
export default Portfolios
