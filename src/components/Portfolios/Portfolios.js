import React from "react";
import {reactLocalStorage} from 'reactjs-localstorage';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router-dom';
import '../../css/Table.scss'
import Footer from '..//Footer';
import Menu from '..//Menu';
import Header from '..//Header';

class Portfolios extends React.Component{
  _isMounted;    
  constructor(props) {      
    super(props);
        this.checkDetails = this.checkDetails.bind(this);
        this.state = {
            portfolios : [],
          username : reactLocalStorage.get('username') ,
          password : reactLocalStorage.get("password"),
          expertID : '',
          clients : [],
        };
        this._isMounted = false;
        //console.log(reactLocalStorage.get("username") + " password "+ reactLocalStorage.get("password"));
      }
      checkDetails(event){
        console.log("this "+ event.currentTarget.dataset.div_id);
        let path='/Assets';
        this.props.history.push({
          pathname:
           path,
          state: { portID: event.currentTarget.dataset.div_id}
        });
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
                  <small>Portfolios</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                  <li><a href="#">Tables</a></li>
                  <li className="active">Portfolios</li>
                </ol>
              </section>
          <div className="box">
                      <div className="box-header">
                        <h3 className="box-title">List of Portfolios</h3>
                      </div>
                    
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
                                item.Portfolio_creationDate=item.Portfolio_creationDate.slice(0,item.Portfolio_creationDate.indexOf('T'));
                                return(
                                    <tr>
                                <td>{item.Portfolio_ID}</td>
                                <td>{item.Portfolio_title}</td>
                                <td>{item.Portfolio_creationDate}</td>
                                <td><a onClick={this.checkDetails} data-div_id={item.Portfolio_ID}><FontAwesomeIcon icon={faFolderOpen} color="rgb(221, 0, 48)" size="lg"/></a></td>
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
            </div>
            </div> 
            </div>
           
            <Footer/>
            </>           
        );
    }
}
export default withRouter(Portfolios);
